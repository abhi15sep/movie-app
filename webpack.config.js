/* eslint-disable */
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'public')],
    historyApiFallback: true, //Fallback to index.html
    disableHostCheck: true
  }
}
