import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  items: DS.hasMany('order-item'),
  totalPrice: 0,

  recomputeTotal() {
    let totalPrice = this.get('items').reduce((sum, orderItem) => {
      return sum + orderItem.get('quantity') * orderItem.get('menuItem.price');
    }, 0);

    this.setProperties({totalPrice});
  },
});
