// 执行环境
const NODE_ENV = process.env.NODE_ENV
module.exports = {
  pages: {
    index: {
      entry: NODE_ENV === 'development' ? './src/main.js' : './src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: { extract: false },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/src/index')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
// configureWebpack: {
//   output: {
//     filename: 'vue-table.js',
//     library: 'vue-table', // 指定的就是你使用require时的模块名
//     libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
//     umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
//   }
// },