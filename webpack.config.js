const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/app.jsx'],
  output: { path: __dirname + '/dist', filename: './out.js' },
  watch: true,
  module: {
    loaders: [
        {
          test: /\.jsx$/, exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'stage-2', 'react'] }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader?sourceMap!sass-loader?sourceMap'
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
  ],
}
