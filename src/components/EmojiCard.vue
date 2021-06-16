<template>
  <div
    class="emoji-card"
    :title="`Click to copy ${name}`"
    @click="$emit('click', name)"
  >
    <nuxt-img format="webp" :src="url" alt="emoji" />
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
  display: flex;
  align-items: center;

  height: 7rem;
  border: 1px dotted rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
  }

  & > img {
    margin: 1rem;
    width: 3rem
  }

  & > span {
    user-select: none;
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
