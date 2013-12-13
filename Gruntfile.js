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

        concurrent: {
            dev: {
                tasks: ['watch',"compass:dev"],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            options: {
                atBegin: true
            },
            jekyll: {
                files: ['templates/**/*.html'],
                tasks: ['jekyll:dev']
            }
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
                    cssDir: './dist/css',
                    force: true
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded',
                    environment: 'development',
                    cssDir: './dev/css',
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
                csslintrc: '.csslintrc'
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

        jekyll: {
            options: {
                bundleExec: true,
                drafts: false,
            },

            server : {
                dest: 'dev',
                src : 'templates',
                server : true,
                server_port : 8000,
                auto : true,
                raw: 'exclude: ["LICENSE", ".csslintrc", ".csscomb-sortOrder.json", ".gitignore", "Gemfile", "Gemfile.lock", "Gruntfile.js", "package.json", "node_modules", "README.md", "sass", "dist"]\n' +
                     'environment: "dev"'
            },

            dist: {
                options: {
                    src : 'templates',
                    dest: 'dist',
                    raw: 'exclude: ["LICENSE", ".csslintrc", ".csscomb-sortOrder.json", ".gitignore", "Gemfile", "Gemfile.lock", "Gruntfile.js", "package.json", "node_modules", "README.md", "sass", "dist"]\n' +
                         'environment: "dist"'
                }
            },
            dev: {
                options: {
                    src : 'templates',
                    dest: 'dev',
                    raw: 'exclude: ["LICENSE", ".csslintrc", ".csscomb-sortOrder.json", ".gitignore", "Gemfile", "Gemfile.lock", "Gruntfile.js", "package.json", "node_modules", "README.md", "sass", "dist"]\n' +
                         'environment: "dev"'
                }
            }
        }
    });


    // Use grunt-tasks to load modules instead of
    // grunt.loadNpmTasks('xxx');
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


    // Distribution related task
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js', 'dist-fonts', 'dist-jekyll']);
    grunt.registerTask('dist-css', ['compass:dist', 'csscomb', 'cssmin', 'usebanner']);
    //grunt.registerTask('dist-js', ['concat', 'uglify']);
    grunt.registerTask('dist-js', []);
    grunt.registerTask('dist-fonts', ['copy']);
    grunt.registerTask('dist-jekyll', ['']);


    // Default task
    grunt.registerTask('default', ['concurrent:dev']);
};
