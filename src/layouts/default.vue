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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  background: #108775;
  background: -webkit-linear-gradient(to right, #2F495E, #6e7c78, #108775);
  background: linear-gradient(to top, #2F495E, #6e7c78, #108775);
  background-attachment: fixed;
}

body, input, button, ::placeholder {
  font: 400 1.8rem 'Nanum Gothic Coding', monospace;
  color: #fff;
}
</style>
