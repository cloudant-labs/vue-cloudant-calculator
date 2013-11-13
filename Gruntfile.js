var sass = require('component-sass')

module.exports = function( grunt ) {

    grunt.initConfig({

        componentbuild: {
            build: {
                options: {
                    standalone: true,
                    configure: function (builder) {
                        builder.use(sass)
                    }
                },
                src: '.',
                dest: 'build'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            dev: {
                files: ['src/**/*', 'component.json'],
                tasks: ['componentbuild']
            }
        }

    })

    grunt.loadNpmTasks( 'grunt-contrib-watch' )
    grunt.loadNpmTasks( 'grunt-component-build' )
    grunt.registerTask( 'default', ['componentbuild'] )

}