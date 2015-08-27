module.exports=function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/src/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/src/land.css': 'assets/stylesheets/src/land.scss',
          'assets/stylesheets/src/contact.css': 'assets/stylesheets/src/contact.scss',
          'assets/stylesheets/src/page2.css': 'assets/stylesheets/src/page2.scss',
          'assets/stylesheets/src/page3.css': 'assets/stylesheets/src/page3.scss',
          'assets/stylesheets/src/join.css': 'assets/stylesheets/src/join.scss'
        }
      }
    },
    concat: {
      css: {
        src: [
          'assets/stylesheets/src/common.css',
          'assets/stylesheets/src/land.css',
          'assets/stylesheets/src/contact.css',
          'assets/stylesheets/src/page2.css',
          'assets/stylesheets/src/page3.css',
          'assets/stylesheets/src/join.css'
        ],
        dest: 'assets/stylesheets/styles.css'
      }
    },
    watch: {
      scripts: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'concat:css']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass', 'concat:css', 'watch']);
};  