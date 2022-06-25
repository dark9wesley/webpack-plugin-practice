const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const TestPlugin = require('./plugins/test-plugin')
const BannerPlugin = require('./plugins/banner-webpack-plugin')
const CleanPlugin = require('./plugins/clean-webpack-plugin')
const AnalyzePlugin = require('./plugins/analyze-webpack-plugin')
const InlinePlugin = require('./plugins/inline-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
  plugins: [
    new TestPlugin(),
    new BannerPlugin({
      author: 'pengyw'
    }),
    new CleanPlugin(),
    new AnalyzePlugin(),
    new InlinePlugin([/b\.js/]),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  mode: 'production',
}
