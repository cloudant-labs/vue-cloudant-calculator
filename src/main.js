var Seed = require('seed')

config({
    directives: [
        'flip'
    ],
    filters: [
        'reverse'
    ],
    components: [
        'a',
        'b'
    ]
})

var app = new Seed({
    el: 'body',
    scope: {
        msg: 'hello',
        value: 'this should be reversed and flipped',
        bgColor: '#f3f3f3'
    }
})

function config (conf) {
    for (var type in conf) {
        conf[type].forEach(function (id) {
            var method = type.slice(0, -1),
                value = require(
                    type === 'components'
                    ? id
                    : './' + type + '/' + id
                )
            Seed[method](id, value)
        })
    }
}