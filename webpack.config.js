const path = require('path')
const TestPlugin = require('./plugins/test-plugin')
const BannerPlugin = require('./plugins/banner-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new TestPlugin(),
    new BannerPlugin({
      author: 'pengyw'
    }),
  ],
  mode: 'production',
}
