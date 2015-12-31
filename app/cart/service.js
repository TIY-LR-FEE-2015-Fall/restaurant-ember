import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  order: null,

  newOrder() {
    let order = this.get('store').createRecord('order');

    this.set('order', order);
  },

  init() {
    this._super(...arguments);

    this.newOrder();
  },

  firstForMenuItem(menuItem) {
    return this.get('order.items').find((current) => {
      return current.get('menuItem.id') === menuItem.id;
    });
  },

  // Probably want to unit test this...
  existsInCart(item) {
    // Check if item is already in the cart/order
    if (this.firstForMenuItem(item)) {
      return true;
    }

    return false;
  },

  // Probably want to unit test this...
  addItem(itemToAdd) {
    if (this.existsInCart(itemToAdd)) {
      // Increment existing quantity

      // Find the order item from the cart
      let orderItem = this.firstForMenuItem(itemToAdd);

      // IncrementProperty 'quantity'
      orderItem.incrementProperty('quantity', 1);
    } else {
      // Create a new order item for the current order
      let orderItem = this.get('store').createRecord('order-item', { menuItem: itemToAdd, quantity: 1});
      this.get('order.items').addObject(orderItem);
    }

    this.get('order').recomputeTotal();
  },

  sendOrder() {
    let order = this.get('order');

    // Save the order
    order.save().then(() => {
      // Then Save all order items
      let orderItemsAreSaving = order.get('items').map((orderItem) => {
        return orderItem.save();
      });

      return Ember.RSVP.all(orderItemsAreSaving);
    }).then(() => {
      // Then reset the order
      this.newOrder();
    });
  },
});
