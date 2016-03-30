function Watch(){

  this.export = function(){
    return {
      css: this.css()
    };
  }

}

Watch.prototype.css = function(){
  return {
    files: ['sass/**/*.scss'],
    tasks: ['sass','postcss'],
    options: {
      spawn: false,
      livereload: true
    },
  };
};

module.exports = new Watch().export();
