// import path from 'path'
const path = require('path')
// import webpack from 'webpack'

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.styl'],
      alias: {
        src: path.resolve(__dirname, './src'),
        common: path.resolve(__dirname, './src/common'),
        base: path.resolve(__dirname, './src/base'),
        api: path.resolve(__dirname, './src/api')
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api/getDiscList': {
        target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        secure: false,
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite: {
          '^/api/getDiscList': ''
        }
      }
    }
  }
}
