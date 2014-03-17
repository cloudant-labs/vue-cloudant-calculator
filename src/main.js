var Vue = require('vue')

new Vue({
  el: 'body',

  components: {
    calculator: require('calculator'),
    field: require('field')
  },

  filters: {
    round2decimal: require('./filters/round2decimal')
  },

  data: {
    fields: [{
        label: "Data Volume",
        description: "per GB",
        help: "DB and Index (MapReduce & Full-Text Search) disk usage",
        amount: 15,
        cost: 1,
        per: 1
      }, {
        label: "Heavy HTTP requests",
        description: "per 100",
        help: "PUT/POST/DELETE/COPY requests",
        amount: 2500,
        cost: 0.015,
        per: 100
      }, {
        label: "Light HTTP requests",
        description: "per 500",
        help: "GET/HEAD requests",
        amount: 25000,
        cost: 0.015,
        per: 500
      }
    ]
  }
});
