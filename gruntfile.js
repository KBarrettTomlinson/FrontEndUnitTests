module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html',
              '**/*.html',
              '**/**/*.html'],
        dest: 'server/public/views/'
      },
      scripts: {
        expand: true,
        cwd: 'client/scripts',
        src: ['client.js','*.js'],
        dest: 'server/public/scripts/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css','images/*.*'],
        dest: 'server/public/styles/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      }
    },
    watch: {
      files: [
        'client/**/*.*'
      ],
      tasks: ['copy']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy','watch']);
};
