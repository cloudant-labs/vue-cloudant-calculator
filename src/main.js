var Vue = require('vue')

Vue.component('field', {
  computed: {
    total: function() {
      return (this.amount / this.per) * this.cost;
    }
  }
});

new Vue({
  el: 'body',

  components: {
    a: require('a')
  },

  data: {
    fields: [{
        label: "Data Volume",
        description: "per GB / month",
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
  },
  computed: {
    grand_total: function() {
      return this.fields.reduce(function(prev, curr) {
        if (isNaN(prev)) {
          return (prev.amount / prev.per) * prev.cost
            + (curr.amount / curr.per) * curr.cost;
        } else {
          return prev + (curr.amount / curr.per) * curr.cost;
        }
      });
    }
  }
});
