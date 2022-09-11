const path = require('path')
module.exports = () => ({
  entry: { index: './src/index.js' },
  mode: 'development',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        // use: ['style-loader', 'css-loader'],
      },
    ],
  }
})