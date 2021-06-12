<template>
  <header class="app-header">
    <h1>
      <span class="github">GitHub</span>
      <span class="emojis">emojis</span>
      <img src="/logo.png" alt="logo" width="75" class="logo">
    </h1>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 0 0;

  h1 {
    flex-shrink: 0;
    margin: 6rem 12rem 6rem 6rem;

    .github {
      font: 700 5rem 'Kufam', cursive;
    }

    .emojis {
      font: 400 5rem 'Chewy', cursive;
    }

    .logo {
      position: absolute;
      z-index: -1;

      margin-top: -2.8rem;
      margin-left: -1.2rem;

      font-size: 7rem;
    }
  }
}
</style>
