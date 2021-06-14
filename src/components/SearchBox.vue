<template>
  <div class="search-box">
    <div class="input-wrapper">
      <input
        ref="searchInput"
        placeholder="Search for emoji..."
        autofocus
        :value="value"
        @input="handleSearch"
      >
      <button v-if="value" type="button" @click="clearSearch">
        &times;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
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
    const searchInput = ref<HTMLInputElement>()

    function handleSearch(event: InputEvent) {
      emit('input', (event.target as HTMLInputElement)?.value.trim())
    }

    function clearSearch() {
      searchInput.value?.focus()
      emit('input', '')
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

    button {
      border: none;
      outline: none;
      background: transparent;

      font-size: 2.4rem;

      cursor: pointer;
    }
  }
}
</style>
