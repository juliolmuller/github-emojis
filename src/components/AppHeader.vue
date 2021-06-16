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
    <span>
      Developed with ♥ by <strong>Julio L. Muller</strong> •
      <a href="https://github.com/juliolmuller/github-emojis" target="_blank">
        Check out on <img src="/icon-github.svg" alt="GitHub">
      </a>
    </span>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  & > span {
    display: block;
    margin-top: 1rem;

    font-size: 1.5rem;

    strong {
      font-weight: 400;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;

      border-radius: 4px;
      padding: 2px 4px;
      color: white;
      text-decoration: none;

      transition: all 150ms;

      &:hover {
        filter: invert(1);
        background: #000;
      }

      img {
        height: 1.8rem;
        margin-left: 0.75rem;
      }
    }
  }
}
</style>
