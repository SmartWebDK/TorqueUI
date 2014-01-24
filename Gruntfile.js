module.exports = function(grunt) {

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
                            '\t\t<link rel="stylesheet" href="/tdcss.js/tdcss.css" type="text/css" media="screen">',
                            '\t\t<link rel="stylesheet" href="/css/framework.css" type="text/css" media="screen">',
                            '<!--[if (lt IE 9) & (!IEMobile)]>',
                                '<script src="js/ie.js"></script>',
                            '<![endif]-->',
                            '<script type="text/javascript" src="js/all.js">',
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
                        '\t</head>',
                        '\t<body>',
                            '\t\t<div id="tdcss">',
                                '\t\t\t<!-- content -->',
                            '\t\t</div>\n',
                            '\t\t<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js"></script>',
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
            html: {
                files: ['test/**/*.html', '!test/index.html'],
                tasks: ['clean:html','buildTest']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['clean:js','concat:test','uglify:test','copy:js']
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: 'compass:dev'
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            test: {
                src: ['./js/lib/respond.matchmedia.addListener.min.js','./js/lib/respond.js/respond.min.js','./js/lib/html5shiv/html5.js'],
                dest: './test/js/ie.js'
            },
            dist: {
                src: ['./js/lib/respond.matchmedia.addListener.min.js','./js/lib/respond.js/respond.min.js','./js/lib/html5shiv/html5.js'],
                dest: './dist/js/ie.js'
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
                    './dist/js/all.js': ['./js/*.js']
                }
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


    // Create related task
    // For when you wan't to create a new element / component in the framework
    grunt.registerTask('create', 'A simple task for creating a new ui element or component', function () {
        var config = grunt.config.get(),
            name = grunt.option("name").replace(/\s/g, "-") || "unnamed",
            templates_path = "./test/",
            sass_path = "./sass/modules/";

        name = ( grunt.file.isFile(templates_path+name) ) ? name +"-"+ grunt.template.today("yyyymmdd-HHMMss") : name;
        var template_file = templates_path +name.toLowerCase()+ ".html",
            sass_file = sass_path+ "_" +name.toLowerCase()+ ".scss";

        grunt.file.write(template_file, grunt.config("template"));
        grunt.file.write(sass_file, "");

        grunt.log.oklns("Created template file: " + template_file );
        grunt.log.oklns("Created Sass file: " + sass_file);
    });


    // Build test
    grunt.registerTask('buildTest', 'A task that takes all small tests and builds them into a index file', function () {
        // Force task into async mode and grab a handle to the "done" function.
        var cheerio = require('cheerio'),
            filepath = "test/index.html";

        if ( grunt.file.isFile( filepath ) ) {
            grunt.file.delete( filepath, { force: true } );
        }

        // get all files
        var files = grunt.file.expand( grunt.config('watch.html.files') );

        // get their contents
        var contents = files.sort().map( function( filepath ) {
            var content = grunt.file.read(filepath);
            var $ = cheerio.load(content);

            return $("#tdcss").html();
        }).join("\n\n\n");

        // write to file
        var data = grunt.config('template');
        data = data.replace("<!-- content -->", contents);
        data = data.replace("<title></title>", "<title>"+ grunt.config('pkg.name') +"</title>");
        grunt.file.write(filepath, data);

        // tell about it
        grunt.log.oklns('Created index file: '+ filepath);
    });

    // Distribution related task
    grunt.registerTask('dist', ['clean:dist', 'dist-css', 'dist-js', 'dist-fonts','usebanner']);
    grunt.registerTask('dist-css', ['compass:dist', 'csscomb', 'cssmin']);
    //grunt.registerTask('dist-js', ['concat', 'uglify']);
    grunt.registerTask('dist-js', ['concat:dist','uglify:dist']);
    grunt.registerTask('dist-fonts', ['copy:fonts']);

    // server
    grunt.registerTask("server", ['connect:server']);

    // Default task
    grunt.registerTask('default', ['watch']);
};
