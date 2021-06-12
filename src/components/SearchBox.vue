<template>
  <div class="search-box">
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

  position: sticky;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;

  input {
    flex-grow: 1;

    outline: none;
    border: 1px solid #fff;
    border-radius: 2.5rem;
    background: rgba(250, 250, 250, 0.4);
    padding: 1rem 2rem;

    font-size: 2.4rem;
    letter-spacing: 0.4rem;

    transition: background-color 200ms;

    &:focus {
      background: transparent;
    }
  }

  button {
    position: absolute;
    right: 4rem;

    border: none;
    outline: none;
    background: transparent;

    font-size: 2.4rem;

    cursor: pointer;
  }
}
</style>
