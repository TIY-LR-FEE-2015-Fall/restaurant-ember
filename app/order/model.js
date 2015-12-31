import DS from 'ember-data';

export default DS.Model.extend({
  items: DS.hasMany('order-item'),

  totalPrice: Ember.computed('items.@each.quantity', function() {
    console.log('compute');
    debugger;
    return this.get('items').reduce((sum, orderItem) => {
      return sum + orderItem.get('quantity') * orderItem.get('menuItem.price');
    }, 0);
  }),
});
