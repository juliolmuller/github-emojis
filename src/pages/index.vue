<template>
  <div id="app">
    <SearchBox v-model="search" />

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
      <img src="/loading.svg" alt="loading spinner">
    </div>

    <Notification :message="notification" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

const NOTIFICATION_DURATION = 2000

export default defineComponent({
  data() {
    return {
      notificationTimeout: 0,
      notification: '',
      isLoading: true,
      search: '',
      emojis: [],
    }
  },

  async fetch() {
    const response = await fetch('https://api.github.com/emojis')
    const emojis = await response.json()

    this.emojis = Object
      .keys(emojis)
      .map((key) => ({
        name: `:${key}:`,
        url: emojis[key],
        visible: true,
      }))
  },

  computed: {
    visibleEmojis() {
      const search = new RegExp(this.search, 'i')

      return this.emojis.map((emoji) => ({
        ...emoji,
        visible: !!emoji.name.match(search),
      }))
    },
  },

  methods: {
    async copyToClipboard(text) {
      await navigator.clipboard.writeText(text)
      clearTimeout(this.notificationTimeout)
      this.notification = `Copied <strong>${text}</strong><br> to Clipboard!`
      this.notificationTimeout = setTimeout(() => {
        this.notification = ''
      }, NOTIFICATION_DURATION)
    },
  },
})
</script>

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
