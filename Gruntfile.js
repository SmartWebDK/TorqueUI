module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    config: "config.rb",
                    outputStyle: 'compressed',
                    environment: 'production',
                    bundleExec: true,
                    force: true
                }
            },

            dev: {                    // Another target
                options: {
                    config: "config.rb",
                    outputStyle: 'expanded',
                    environment: 'development',
                    bundleExec: true,
                    watch: true
                }
            }
        },


        // watch: { // for development run 'grunt watch'
        //     compass: {
        //         files: ['sass/*.scss'],
        //         tasks: ['compass:dev']
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['compass:dev']);
};
