<template>
  <div id="app">
    <SearchBox v-model="search" />

    <div class="cards-deck">
      <EmojiCard
        v-for="emoji in visibleEmojis"
        :key="emoji.name"
        v-bind="emoji"
        @click="copyToClipboard"
      />
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
      search: '',
      emojis: {},
    }
  },

  async fetch() {
    const response = await fetch('https://api.github.com/emojis')
    this.emojis = await response.json()
  },

  computed: {
    visibleEmojis() {
      return Object
        .keys(this.emojis)
        .filter((key) => (key.includes(this.search)))
        .map((key) => ({ name: `:${key}:`, url: this.emojis[key] }))
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
  flex: 1 0 auto;
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto;

  .cards-deck {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
