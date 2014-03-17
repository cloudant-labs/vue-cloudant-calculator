module.exports = {
  template: require('./template.html'),
  computed: {
    grand_total: function() {
      return this.$parent.fields.reduce(function(prev, curr) {
        if (isNaN(prev)) {
          return (prev.amount / prev.per) * prev.cost
            + (curr.amount / curr.per) * curr.cost;
        } else {
          return prev + (curr.amount / curr.per) * curr.cost;
        }
      });
    }
  }
}
