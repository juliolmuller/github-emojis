<template>
  <transition name="fade">
    <div v-if="message" class="notification">
      {{ /* eslint-disable-next-line vue/no-v-html */ }}
      <p v-html="message" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Notification',

  props: {
    message: {
      type: String,
      default: null,
    },
  },
})
</script>

<style lang="scss">
.notification {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);

  width: 35%;
  min-width: 300px;
  border-radius: 0.9rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.8em;

  p {
    text-align: center;
    line-height: 3rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
