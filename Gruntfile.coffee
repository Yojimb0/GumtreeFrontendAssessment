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