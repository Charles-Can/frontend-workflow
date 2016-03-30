function sass(){
  return {
    options: {
      sourceMap: process.env.PROD !== 'true',
      includePaths: [
        './bower_components/bootstrap/scss/'
      ],
    },
    dist: {
      files: [{
        expand: true,
        flatten: true,
        src: ['sass/*.scss'],
        dest: '../public/css/',
        ext: '.css'
      }]
    },
  };
}

module.exports = sass();
