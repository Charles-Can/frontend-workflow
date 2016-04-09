var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, '../public/js/' ),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: ['node_modules', 'bower_components'],
        query: {
          presets: ['es2015']
        }
      },
    ],
  }
};