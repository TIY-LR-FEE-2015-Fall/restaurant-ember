import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  cart: Ember.inject.service(),

  click() {
    this.send('addToCart');
  },

  actions: {
    // Add Item to Cart???
    addToCart() {
      let cart = this.get('cart');

      cart.addItem(this.getAttr('menuItem'));
    },
  },
});
