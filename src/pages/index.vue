<script setup lang="ts">
import { computed, ref } from 'vue'

interface Emoji {
  name: string
  url: string
  visible: boolean
}

const notification = ref('')
const notificationTimeout = ref<NodeJS.Timeout | number>(0)
const isLoading = ref(false)
const searchText = ref('')
const emojis = ref<Emoji[]>([])

const visibleEmojis = computed(() => {
  const searchPattern = new RegExp(searchText.value, 'i')

  return emojis.value.map((emoji) => ({
    ...emoji,
    visible: !!emoji.name.match(searchPattern),
  }))
})

async function fetchEmojis() {
  const response = await fetch('https://api.github.com/emojis')
  const emojis = await response.json()

  emojis.value = Object
    .keys(emojis)
    .map((key) => ({
      name: `:${key}:`,
      url: emojis[key],
      visible: true,
    }))
}

async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text)
  clearTimeout(notificationTimeout.value)
  notification.value = `Copied <strong>${text}</strong><br> to Clipboard!`
  notificationTimeout.value = setTimeout(() => {
    notification.value = ''
  }, 2000)
}
</script>

<template>
  <div id="app">
    <SearchBox v-model="searchText" />

    <div class="cards-deck">
      <EmojiCard
        v-for="emoji in visibleEmojis"
        v-show="emoji.visible"
        :key="emoji.name"
        v-bind="emoji"
        @click="copyToClipboard"
      />
    </div>

    <div v-if="isLoading" class="loading">
      <img src="/img/loading.svg" alt="loading spinner">
    </div>

    <Notification :message="notification" />
  </div>
</template>

<style lang="scss">
#app {
  .cards-deck {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    margin: 0 1.5rem;

    @media (min-width: 768px) {
      & {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1200px) {
      & {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15vh;
  }
}
</style>
