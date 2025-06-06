const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true 
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Node.js后端地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
