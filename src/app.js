var Seed = require('seed')

// load directives
;['bg'].forEach(function (id) {
    Seed.directive(id, require('./directives/' + id))
})

// load filters
;['reverse'].forEach(function (id) {
    Seed.filter(id, require('./filters/' + id))
})

// load components
;['box', 'cube'].forEach(function (id) {
    Seed.viewmodel(id, Seed.extend(require(id)))
})

var app = new Seed({
    el: 'body',
    scope: {
        msg: 'hello',
        value: 'this should be reversed',
        bgColor: '#eef'
    }
})