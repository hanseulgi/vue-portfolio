const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'vue-portfolio'
    ? '/vue-portfolio/'
    : '/',
  outputDir: './docs',
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}
