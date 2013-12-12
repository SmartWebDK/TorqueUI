module.exports = function(grunt) {

    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
              ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              ' */\n\n',

        // Task configuration.
        clean: {
          dist: ['dist']
        },

        compass: {
            options : {
                require: ['rubygems','bundler/setup','susy'],
                httpPath: "/",
                sassDir: 'sass',
                relativeAssets: true,
                raw: 'preferred_syntax = :scss\n',
                bundleExec: true,
            },
            dist: {
                options: {
                    outputStyle: 'expanded',
                    environment: 'production',
                    cssDir: 'dist/css',
                    force: true
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded',
                    environment: 'development',
                    cssDir: 'dev/css',
                    watch: true
                }
            }
        },


        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [
                        'dist/css/<%= pkg.name %>.css',
                        'dist/css/<%= pkg.name %>.min.css',
                    ]
                }
            }
        },

        copy: {
            fonts: {
                expand: true,
                src: ['fonts/*'],
                dest: 'dist/'
            }
        },

        csslint: {
            options: {
                csslintrc: {
                    "adjoining-classes": false,
                    "box-sizing": false,
                    "box-model": false,
                    "compatible-vendor-prefixes": false,
                    "floats": false,
                    "font-sizes": false,
                    "gradients": false,
                    "important": false,
                    "known-properties": false,
                    "outline-none": false,
                    "qualified-headings": false,
                    "regex-selectors": false,
                    "text-indent": false,
                    "unique-headings": false,
                    "universal-selector": false,
                    "unqualified-attributes": false
                }
            },
            src: ['dev/css/<%= pkg.name %>.css', 'dev/css/<%= pkg.name %>.min.css']
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['./**/*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },

        csscomb: {
            sort: {
                options: {
                    sortOrder: '.csscomb-sortOrder.json'
                },
                files: {
                    'dist/css/<%= pkg.name %>.css': ['dist/css/<%= pkg.name %>.css'],
                    'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.min.css'],
                }
            }
        },
    });


    // Use grunt-tasks to load modules instead of
    // grunt.loadNpmTasks('xxx');
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


    // Distribution related task
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js', 'dist-fonts']);
    grunt.registerTask('dist-css', ['compass:dist', 'csscomb', 'cssmin', 'usebanner']);
    //grunt.registerTask('dist-js', ['concat', 'uglify']);
    grunt.registerTask('dist-js', []);
    grunt.registerTask('dist-fonts', ['copy']);

    // Development related task
    grunt.registerTask('dev', ['compass:dev']);

    // Default task
    grunt.registerTask('default', ['dev']);
};
