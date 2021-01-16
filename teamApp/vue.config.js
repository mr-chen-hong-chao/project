/*
 * @Description: 配置文件
 */
module.exports = {
    publicPath: './',
    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: ' ', // 线上后端地址
          changeOrigin: true, //允许跨域
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }