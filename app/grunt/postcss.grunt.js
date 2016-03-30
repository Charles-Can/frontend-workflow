function postcss(){
  return {
    options: {
      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: '../public/css/*.css'
    }
  };
}

module.exports = postcss();
