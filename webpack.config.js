var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
  target: 'electron',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /flexboxgrid/ },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/assets/img/[name].[ext]", exclude: /node_modules/ }

    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      exclude: ['bundle.js', 'fonts', 'img', 'index.html']
    })
  ]
};