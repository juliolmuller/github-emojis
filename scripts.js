
Vue.createApp({
  setup() {
    const emojis = Vue.ref({})
    const searchText = Vue.ref('')
    const notification = Vue.ref('')
    const notificationTimeout = Vue.ref(null)

    const copyToClipboard = (text) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          clearTimeout(notificationTimeout.value)
          notification.value = text
          notificationTimeout.value = setTimeout(() => {
            notification.value = ''
          }, 2000)
        })
    }

    const searchedEmojis = Vue.computed(() => {
      return Object
        .keys(emojis.value)
        .filter((key) => (key.indexOf(searchText.value) > -1))
        .map((key) => ({ name: `:${key}:`, url: emojis.value[key] }))
    })

    fetch('https://api.github.com/emojis')
      .then((response) => response.json())
      .then((data) => emojis.value = data)

    return {
      copyToClipboard,
      searchedEmojis,
      searchText,
      notification,
    }
  }
}).mount('#app')
