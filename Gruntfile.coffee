module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      test:
        files: ['coffee/**/*.coffee','test/**/*.coffee','ex/**/*.coffee']
        tasks: 'coffee'
      mocha:
        files: ['test/**/*.js']
        tasks: 'simplemocha'
    coffee:
      compile:
        options:
          bare: true
        files: [{
          expand: true
          cwd: 'coffee/'
          src: ['**/*.coffee']
          dest: 'js/'
          ext: '.js'
        },{
          expand: true
          cwd: 'test/'
          src: ['**/*.coffee']
          dest: 'test/'
          ext: '.js'
        },{
          expand: true
          cwd: 'ex/'
          src: ['**/*.coffee']
          dest: 'ex/'
          ext: '.js'
        }
        ]
    simplemocha:
      all:
        src: ['test/**/*.js']
      options:
        reporter: 'spec'
        ui: 'bdd'

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-simple-mocha'
  grunt.registerTask 'default', ['watch']
  return
