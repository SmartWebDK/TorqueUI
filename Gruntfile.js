module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('dist', ['compass:dist']);
};
