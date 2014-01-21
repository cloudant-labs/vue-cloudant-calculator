var Vue = require('vue')

new Vue({

    el: 'body',

    directives: {
        flip: require('./directives/flip')
    },

    filters: {
        reverse: require('./filters/reverse')
    },

    components: {
        a: require('a'),
        b: require('b')
    },

    data: {
        msg: 'hello',
        value: 'this should be reversed and flipped',
        bgColor: '#f3f3f3'
    }
})