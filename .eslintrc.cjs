const path = require('node:path')
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting')

module.exports = {
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-airbnb'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")]
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`
    })
  }
}
