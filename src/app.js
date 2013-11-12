var Seed = require('seed'),
    Box  = Seed.extend(require('box')),
    Cube = Seed.extend(require('cube'))

var app = new Seed({

    el: 'body',

    viewmodels: {
        box: Box,
        cube: Cube
    },

    scope: {
        msg: 'hello'
    }
    
})