var sass  = require('component-sass'),
    fs    = require('fs')

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
    grunt.registerTask( 'dev', ['install', 'watch'])

    grunt.registerTask( 'install', function () {
        var done = this.async()
        exec('npm install', function () {
            exec('component install', done)
        })
    })

    grunt.registerTask( 'new', function (id) {
        if (!id) return
        var path = 'src/components/' + id
        fs.mkdirSync(path)
        var conf = {
            name: id,
            scripts: ['index.js'],
            styles: ['style.sass'],
            templates: ['template.html']
        }
        fs.writeFileSync(path + '/component.json', JSON.stringify(conf, null, 4), 'utf-8')
        fs.writeFileSync(path + '/index.js', 'module.exports = {\n    template: require(\'./template.html\')\n}', 'utf-8')
        fs.writeFileSync(path + '/style.sass', '', 'utf-8')
        fs.writeFileSync(path + '/template.html', '', 'utf-8')
        var componentConf = require('./component.json')
        componentConf.local.push(id)
        fs.writeFileSync('component.json', JSON.stringify(componentConf, null, 4), 'utf-8')
    })

    function exec (cmd, done) {
        var split = cmd.match(/(?:[^\s"]+|"[^"]*")+/g)
        grunt.util.spawn({
            cmd: split[0],
            args: split.slice(1),
            opts: {
                stdio: 'inherit'
            }
        }, function (err, res) {
            if (err) grunt.fail.fatal(res.stderr)
            done(res.stdout)
        })
    }

}