var Vue = require('vue')

new Vue({
  el: 'body',

  components: {
    calculator: require('calculator'),
    field: require('field')
  },

  data: {
    fields: [{
        label: "Data Volume",
        description: "per GB",
        amount: 15,
        cost: 1,
        per: 1
      }, {
        label: "Heavy HTTP requests",
        description: "per 100",
        amount: 2500,
        cost: 0.015,
        per: 100
      }, {
        label: "Light HTTP requests",
        description: "per 500",
        amount: 25000,
        cost: 0.015,
        per: 500
      }
    ]
  }
});
