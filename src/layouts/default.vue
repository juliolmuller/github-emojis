<template>
  <div id="root">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<style lang="scss">
:root {
  font-size: 60%;

  @media (min-width: 768px) {
    & {
      font-size: 62.5%;
    }
  }

  @media (min-width: 1200px) {
    & {
      font-size: 65%;
    }
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100vh;
}

body {
  min-height: 100vh;
  background: linear-gradient(to top, #2f495e, #108775) fixed;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

body, input, button, ::placeholder {
  font: 400 1.8rem 'Nanum Gothic Coding', monospace;
  color: #fff;
}

#__nuxt, #__layout {
  min-height: 100vh;
  width: 100%;
}

#root {
  display: grid;
  grid-template-rows: auto 1fr auto;

  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
