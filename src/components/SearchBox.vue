<script setup lang="ts">
import { ref } from 'vue';

const model = defineModel<string>();

const searchInput = ref();

function clearSearch(): void {
  searchInput.value.focus();
  model.value = '';
}

function handleSearch(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    clearSearch();
    return;
  }

  const eventTarget = event.target as HTMLInputElement;
  const typedValue = eventTarget?.value ?? '';
  const escapedValue = typedValue.replace(/\\/g, '');

  model.value = escapedValue;
}
</script>

<template>
  <div class="search-box">
    <div class="input-wrapper">
      <input
        ref="searchInput"
        placeholder="Search for emoji..."
        capitalize="false"
        autofocus
        :value="model"
        @keyup="handleSearch"
      />
      <button v-if="model" type="button" @click="clearSearch">&times;</button>
      <img v-else src="/img/icon-search.svg" alt="search icon" />
    </div>
  </div>
</template>

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

    button,
    img {
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
