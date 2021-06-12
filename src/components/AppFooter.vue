<template>
  <footer class="app-footer">
    LacusSoft &copy; {{ currentYear }} - All Rights Reserved
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppFooter',

  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
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
}
</style>
