module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
              ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              ' */\n\n',

        template: [ '<!DOCTYPE html>',
                    '<html class="no-js .wf-loading">',
                        '\t<head>',
                            '\t\t<meta charset="utf-8">',
                            '\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">',
                            '\t\t<title></title>',
                            '\t\t<meta name="viewport" content="width=device-width">\n',
                            '\t\t<link rel="stylesheet" href="tdcss.js/tdcss.css" type="text/css" media="screen">',
                            '\t\t<link rel="stylesheet" href="css/framework.css" type="text/css" media="screen">',
                            '\t\t<link rel="stylesheet" href="css/theme.css" type="text/css" media="screen">',
                            '\t\t<script type="text/javascript">',
                            '\t\tWebFontConfig = { google: { families: [ "Raleway:400,700:latin" ]}',
                            '\t\t};',
                            '\t\t(function() {',
                              '\t\t\tvar wf = document.createElement("script");',
                              '\t\t\twf.src = ("https:" == document.location.protocol ? "https" : "http") +',
                                '\t\t\t"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";',
                              '\t\t\twf.type = "text/javascript";',
                              '\t\t\twf.async = "true";',
                              '\t\t\tvar s = document.getElementsByTagName("script")[0];',
                              '\t\t\ts.parentNode.insertBefore(wf, s);',
                            '\t\t\t})();',
                            '\t\t</script>',
                            '<style>',
                                '.r,',
                                '.row {',
                                  'border-radius: 0.25em;',
                                '}',

                                '.container {',
                                  'margin-top: 20px;',
                                  'border-radius: 0.25em;',
                                '}',

                                '[class^="col-"] {',
                                  'text-align: center;',
                                  'line-height: 40px;',
                                  'background-color: #000;',
                                  'opacity: 0.25;',
                                  'font-weight: bold;',
                                  'min-height: 40px;',
                                  'border-radius: 0.25em;',
                                  'margin-top: 5px;',
                                  'margin-bottom: 5px;',
                                '}',

                                '[class^="col-"] [class^="col-"] {',
                                    'opacity: .50;',
                                '}',

                            '</style>',
                        '\t</head>',
                        '\t<body>',
                            '\t\t<div id="tdcss">',
                                '\t\t\t<!-- content -->',
                            '\t\t</div>\n',
                            '\t\t<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js"></script>',
                            '<!--[if (lt IE 9) & (!IEMobile)]>',
                                '<script src="js/ie.js"></script>',
                            '<![endif]-->',
                            '<script type="text/javascript" src="js/all.js"></script>',
                            '\t\t<script src="/tdcss.js/tdcss.js"></script>',
                            '\t\t<script>',
                                    '\t\t\t$("#tdcss").tdcss();',
                            '\t\t</script>',
                    '</body>',
                    '</html>'].join("\n"),

        // Task configuration.
        clean: {
          dist: ['dist'],
          html: {
            src: ['test/index.html']
          },
          js: {
            src: ['test/js/*']
          }
        },

        connect: {
            server: {
              options: {
                    port: 8000,
                    base: './test/',
                    keepalive: true
                }
            }
        },

        watch: {
            options: {
                atBegin: true
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['clean:js','copy:js','uglify:test','copy:js']
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: 'compass:dev'
            }
        },

        uglify: {
            options: {
                preserveComments: 'some'
            },
            test: {
                files: {
                    './test/js/all.js': ['./js/*.js']
                }
            },
            dist: {
                files: {
                    './dist/js/framework.min.js': ['./js/*.js']
                }
            }
        },

        compass: {
            options : {
                require: ['rubygems','bundler/setup','breakpoint-slicer'],
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
                    cssDir: './test/css'
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
                        'dist/js/all.js'
                    ]
                }
            }
        },

        copy: {
            fonts: {
                expand: true,
                src: ['./fonts/*'],
                dest: './dist/'
            },
            js: {
                expand: true,
                src: ['./js/*.js'],
                dest: './test/'
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
    });

    // Use grunt-tasks to load modules instead of
    // grunt.loadNpmTasks('xxx');
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // Distribution related task
    grunt.registerTask('dist', ['clean:dist', 'dist-css', 'dist-js', 'dist-fonts','usebanner']);
    grunt.registerTask('dist-css', ['compass:dist', 'csscomb', 'cssmin']);
    grunt.registerTask('dist-js', ['uglify:dist']);
    grunt.registerTask('dist-fonts', ['copy:fonts']);

    // server
    grunt.registerTask("server", ['connect:server']);

    // Default task
    grunt.registerTask('default', ['watch']);
};
