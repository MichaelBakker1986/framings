var grunt = require('grunt');

grunt.task.loadNpmTasks('grunt-contrib-coffee');
grunt.task.loadNpmTasks('grunt-contrib-watch');
grunt.task.registerTask('compile', ['coffee']);

module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compileJoined: {
        options: {
          join: true
        },
        files: {
          'js/app.js': ['coffee/**/*.coffee']
        }
      }
    },
    watch: {
      files: 'coffee/**/*.coffee',
      tasks: ['coffee']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  return grunt.registerTask('default', ['coffee']);
};
