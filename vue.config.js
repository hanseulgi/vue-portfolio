const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  outputDir: './docs',
  publicPath: '/vue-portfolio',
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}
