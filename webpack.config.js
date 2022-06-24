const path = require('path')
// const TestPlugin = require('./plugins/test-plugin')
const BannerPlugin = require('./plugins/banner-webpack-plugin')
const CleanPlugin = require('./plugins/clean-webpack-plugin')
const AnalyzePlugin = require('./plugins/analyze-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
  plugins: [
    // new TestPlugin(),
    new BannerPlugin({
      author: 'pengyw'
    }),
    new CleanPlugin(),
    new AnalyzePlugin(),
  ],
  mode: 'production',
}
