<template>
  <div id="layout">
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>

<style lang="scss">
#layout {
  display: grid;
  grid-template-rows: auto 1fr auto;

  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
