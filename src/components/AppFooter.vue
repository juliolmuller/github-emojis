<template>
  <footer class="app-footer">
    LacusSoft &copy; {{ currentYear }} - All Rights Reserved
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppFooter',

  setup() {
    const currentYear = new Date().getFullYear()

    return {
      currentYear,
    }
  },
})
</script>

<style lang="scss">
.app-footer {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 8rem;
  opacity: 0.5;

  font-size: 1.5rem;
  text-align: center;
}
</style>
