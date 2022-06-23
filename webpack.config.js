const path = require('path')
const TestPlugin = require('./plugins/test-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new TestPlugin()
  ],
  mode: 'development',
}
