path = require('path')

module.exports = (grunt) ->

	require("load-grunt-tasks") grunt

	grunt.initConfig
		autoprefixer:
			all:
				expand: true
				flatten: true
				src: 'dist/assets/*.css'
				dest: 'dist/assets/'
		clean:
			all: ["dist/assets/*"]
		sass:
			all:
				options:
					style: 'compressed'
					includePaths: [ path.join(__dirname, 'node_modules') ]
				files:
					'dist/assets/style.css': 'app/assets/style.scss'
		imagemin:
			all:
				files: [{
					expand: true
					cwd: 'app/assets/'
					src: ['**/*.{png,jpg,gif,svg}']
					dest: 'dist/assets/'
				}]

		grunt.registerTask 'build', [ 'clean', 'sass', 'autoprefixer', 'imagemin' ]