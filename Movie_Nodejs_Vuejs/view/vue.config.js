const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports ={
  // https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}


// module.exports = {
//       outputDir: 'target/dist',
//     assetsDir: 'static'
// }


