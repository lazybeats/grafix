module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: true
				// Set to true or set livereload: 1337 to a port number to enable live reloading. Default and recommended port is 35729.
			},
			js : {
				files : ['static/js/*.js']
			},
			css : {
				tasks : 'sass',
				files : ['static/**/*.scss']
			},
			html : {
				files : ['**/*.html']
			}
		},

		sass: {
			dev: {
				files: {
					'static/css/style.css' : 'static/scss/style.scss',
				}
			}
		},

		connect: {
			dev: {
				options: {
					port: 8080
					// base: 'prototype'
				}
			}
		},

		open : {
			dev : {
				path: 'http://localhost:<%= connect.dev.options.port %>/',
				app: 'Chrome'
			}
		}
	});

	// task를 지원하는 플러그인 로드
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	}

	// Default task(s).
	grunt.registerTask('default', ['connect:dev', 'sass:dev', 'open:dev', 'watch']);

	// grunt.registerTask('dev', function (target) {
	// 	grunt.task.run([
	// 		'connect:dev',
	// 		'open:dev',
	// 		'less:dev',
	// 		'watch'
	// 	]);
	// });
};
