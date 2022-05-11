const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // publicPath: '/vue-portfolio/dist/index.html',
  // outputDir: 'docs',
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}
