var path = require('path');
module.exports = {
  entry: {
    'main' : './src/main.js',
  },
  output: {
    path: path.resolve( __dirname, '../public/js/' ),
    filename: '[name].bundle.js',
    publicPath: 'public'
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
