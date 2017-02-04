module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsbeautifier: {
		    options : {
            	js: {
	            	indentWithTabs: true,
            	},
            	css: {
	            	indentWithTabs: true,
            	}
		    },
		    js: {
			    src : ["build/jquery.dialog.js"]
		    }, 
		    css: {
			    src : ["build/jquery.dialog.css"]
		    }
		},
		concat: {
			options: { separator: '\n\n' },
			js : {
				src: ['LICENSE.txt', 'src/jquery.dialog.js'],
				dest: 'build/jquery.dialog.js'
			},
			jsmin : {
				src: ['LICENSE.txt', 'build/jquery.dialog.min.js'],
				dest: 'build/jquery.dialog.min.js'
			},
			css : {
				src: ['LICENSE.txt','build/jquery.dialog.css'],
				dest: 'build/jquery.dialog.css'
			},
			cssmin : {
				src: ['LICENSE.txt','build/jquery.dialog.min.css'],
				dest: 'build/jquery.dialog.min.css'
			}
		},
        uglify: {
		    build: {
		        files: {
		            'build/jquery.dialog.min.js': ['build/jquery.dialog.js']
		        }
		    }
		},
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')({browsers: ['last 3 version']})
				]
			},
			dist: {
				src: 'build/jquery.dialog.css'
			}
		},
		cssmin: {
		    build: {
		        src: 'build/jquery.dialog.css',
		        dest: 'build/jquery.dialog.min.css'
		    }
		},
		sass: {
			options: {
		    	sourcemap: 'none'
			},
		    build: {
		        files: {
		            'build/jquery.dialog.css': 'src/jquery.dialog.scss'
		        }
		    }
		},
		watch: {
		    js: {
		        files: ['src/jquery.dialog.js'],
		        tasks: ['buildjs']
		    },
		    css: {
		        files: ['src/jquery.dialog.scss'],
		        tasks: ['buildcss']
		    }
		}
    });

	grunt.registerTask('default', ['buildall','watch']);
	grunt.registerTask('buildall', ['buildcss', 'buildjs']);

	grunt.registerTask('minifycss', ['cssmin', 'concat:cssmin']);
	grunt.registerTask('buildcss', ['sass', 'postcss', 'jsbeautifier:css', 'concat:css', 'minifycss']);
	
	grunt.registerTask('minifyjs', ['uglify:build', 'concat:jsmin']);								
	grunt.registerTask('buildjs', ['concat:js', 'jsbeautifier:js', 'minifyjs']);

};