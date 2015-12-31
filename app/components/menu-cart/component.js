import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    order() {
      this.get('cart').sendOrder();
    },
  },
});
