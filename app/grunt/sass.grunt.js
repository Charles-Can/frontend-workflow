function sass(){
  return {
          options: {
              sourceMap: true
          },
          dist: {
            files: [{
            expand: true,
            flatten: true,
            src: ['sass/*.scss'],
            dest: '../public/css/',
            ext: '.css'
          }]
        }
    };
};

module.exports = sass();
