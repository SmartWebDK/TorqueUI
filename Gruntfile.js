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
                    '<html>',
                        '<head>',
                            '<meta charset="utf-8">',
                            '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">',
                            '<title></title>',
                            '<meta name="viewport" content="width=device-width">',

                            '<link rel="stylesheet" href="/tdcss.js/tdcss.css" type="text/css" media="screen">',
                            '<link rel="stylesheet" href="/css/framework.css" type="text/css" media="screen">',
                        '</head>',
                        '<body>',
                            '<div id="tdcss">',
                                '<!-- content -->',
                            '</div>',

                            '<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js"></script>',
                            '<script src="/tdcss.js/tdcss.js"></script>',
                            '<script>',
                                    '$("#tdcss").tdcss();',
                            '</script>',
                    '</body>',
                    '</html>'].join("\n"),

        // Task configuration.
        clean: {
          dist: ['dist']
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
                tasks: ['buildTest']
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: 'compass:dev'
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

        grunt.file.write(template_file, template);
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
        var contents = files.map( function( filepath ) {
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
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js', 'dist-fonts', 'dist-jekyll']);
    grunt.registerTask('dist-css', ['compass:dist', 'csscomb', 'cssmin', 'usebanner']);
    //grunt.registerTask('dist-js', ['concat', 'uglify']);
    grunt.registerTask('dist-js', []);
    grunt.registerTask('dist-fonts', ['copy']);

    // server
    grunt.registerTask("server", ['connect:server']);

    // Default task
    grunt.registerTask('default', ['watch']);
};
