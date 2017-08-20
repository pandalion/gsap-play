module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sassFiles: 'sass/**/*.sass',
        jsFiles: 'scripts/**/*.js',
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['<%= jsFiles %>'],
                // the location of the resulting js file
                dest: 'dist/scripts/<%=pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/scripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', '<%= jsFiles %>'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // add more options here to override defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        htmlhint: {
            src: 'index.html'
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                src: 'sass/main.sass',
                dest: 'dist/styles/main.css'
            }
        },
        copy: {
            main: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        watch: {
            files: ['<%= jsFiles %>', '<%= sassFiles %>', 'index.html'],
            tasks: ['jshint', 'htmlhint', 'sass', 'copy']
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-node-sass');

    // set up tasks
    grunt.registerTask('test', ['jshint', 'htmlhint']);
    grunt.registerTask('default', ['jshint', 'htmlhint', 'sass', 'concat', 'uglify', 'copy', 'watch']);
};
