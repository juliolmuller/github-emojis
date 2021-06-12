<template>
  <div class="emoji-card" @click="$emit('click', name)">
    <img :src="url" alt="emoji">
    <span>{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'EmojiCard',

  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.emoji-card {
  flex: 1 0 50%;
  display: flex;
  align-items: center;

  position: relative;

  height: 6rem;
  border: 1px dotted transparent;
  background: rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }

  & > img {
    margin: 1.5rem;
    margin-left: 2rem;
    width: 3rem
  }

  & > span {
    flex-grow: 1;
    font-weight: normal;
    user-select: none;
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    & {
      flex-basis: 33.33%;
    }
  }
}
</style>
