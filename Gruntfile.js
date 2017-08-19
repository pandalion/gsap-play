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
                dest: 'dist/<%=pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js'],
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
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                src: 'sass/main.sass',
                dest: 'dist/styles/main.css'
            }
        },
        watch: {
            files: ['<%= jsFiles %>', '<%= sassFiles %>'],
            tasks: ['jshint', 'sass']
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-node-sass');

    // set up tasks
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'sass', 'concat', 'uglify']);
};
