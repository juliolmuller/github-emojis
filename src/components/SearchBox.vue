<template>
  <div class="search-box">
    <div class="input-wrapper">
      <input
        ref="searchInput"
        placeholder="Search for emoji..."
        capitalize="false"
        autofocus
        :value="value"
        @keyup="handleSearch"
      >
      <button v-if="value" type="button" @click="clearSearch">
        &times;
      </button>
      <img
        v-else
        src="/icon-search.svg"
        alt="search icon"
      >
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SearchBox',

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  emits: ['input'],

  setup(props, { emit }) {
    const searchInput = ref()

    function clearSearch() {
      searchInput.value.focus()
      emit('input', '')
    }

    function handleSearch(event) {
      if (event.key === 'Escape') {
        clearSearch()
        return
      }

      const typedValue = (event.target.value ?? '')
      const escapedValue = typedValue.replace(/\\/g, '')

      emit('input', escapedValue)
    }

    return {
      searchInput,
      handleSearch,
      clearSearch,
    }
  },
})
</script>

<style lang="scss">
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;
  padding: 3rem;

  .input-wrapper {
    flex-basis: 100%;
    display: flex;

    max-width: 900px;
    border-radius: 2.4rem;
    border: 1px solid #fff;
    background: rgba(250, 250, 250, 0.2);
    padding: 1rem 2rem;

    transition: background-color 200ms;

    &:focus-within {
      background: transparent;
    }

    input {
      flex-grow: 1;

      border: none;
      outline: none;
      background: transparent;

      font-size: 2.4rem;
      letter-spacing: 0.4rem;

      cursor: pointer;
    }

    button, img {
      height: 2.4rem;
      border: none;
      outline: none;
      background: transparent;

      font-size: 2.4rem;

      cursor: pointer;
    }
  }
}
</style>
