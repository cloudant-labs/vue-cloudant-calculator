module.exports = {
  computed: {
    total: function() {
      return (this.amount / this.per) * this.cost;
    }
  },
  template: require('./template.html')
}
