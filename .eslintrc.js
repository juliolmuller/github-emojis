module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/typescript',
    'lacussoft',
    'lacussoft/typescript',
    'plugin:nuxt/recommended',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'vue/script-setup-uses-vars': 'off',
  },
}
