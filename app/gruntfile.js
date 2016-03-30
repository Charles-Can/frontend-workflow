require('./grunt/config');

module.exports = function( grunt ) {

  require( 'load-grunt-tasks' )( grunt );

  // Project configuration.
  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' ),
    sass: require('./grunt/sass.grunt'),
    postcss: require('./grunt/postcss.grunt'),
    watch: require('./grunt/watch.grunt'),
  } );
};
