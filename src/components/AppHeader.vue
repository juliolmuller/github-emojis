<template>
  <header class="app-header">
    <h1>
      <span class="github">GitHub</span>
      <span class="emojis">emojis</span>
      <figure class="logo">
        <img src="/logo.png" alt="logo" width="75">
        <figcaption>GitHub Emojis Search App</figcaption>
      </figure>
    </h1>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8rem 0 6rem;

  h1 {
    position: relative;

    padding-right: 62px;

    .github {
      font-family: 'Kufam', cursive;
      font-size: 5rem;
      font-weight: 700;
    }

    .emojis {
      font-family: 'Chewy', cursive;
      font-size: 5rem;
      font-weight: 400;
    }

    .logo {
      position: absolute;
      z-index: -10;
      right: 0;
      top: -18px;

      figcaption {
        display: none;
      }
    }
  }
}
</style>
