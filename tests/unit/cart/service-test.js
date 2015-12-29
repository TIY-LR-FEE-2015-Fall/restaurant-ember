import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:cart', 'Unit | Service | cart', {
  // Specify the other units that are required for this test.
  needs: ['model:order', 'model:order-item', 'model:menu-item'],
});

function createMenuItem(store, params) {
  params = params || { name: 'Coke', description: 'Just a Soft Drink', price: 200, category: 'Drink'};

  return store.createRecord('menu-item', params);
}

test('it exists', function(assert) {
  Ember.run(() => {
    let service = this.subject();

    assert.ok(service);
  });
});

test('it can add a single new order item to the cart', function(assert) {
  Ember.run(() => {
    let service = this.subject();
    let store = service.get('store');
    let order = service.get('order');
    let coke = createMenuItem(store);
    service.addItem(coke);

    assert.equal(order.get('items.length'), 1, 'The order has one item');
    assert.equal(order.get('items.firstObject.menuItem'), coke, 'The first order item is coke');
  });
});

test('it can tell if an item is already in the cart', function(assert) {
  Ember.run(() => {
    let service = this.subject();
    let store = service.get('store');
    let coke = createMenuItem(store);
    let tea = createMenuItem(store, { name: 'Tea', description: 'Not a Soft Drink', price: 200, category: 'Drink'});
    service.addItem(coke);

    assert.equal(service.existsInCart(coke), true, 'Coke is already in the cart');
    assert.equal(service.existsInCart(tea), false, 'Tea is already in the cart');
  });
});

test('it can add a two items to the cart', function(assert) {
  Ember.run(() => {
    let service = this.subject();
    let store = service.get('store');
    let order = service.get('order');
    let coke = createMenuItem(store);
    let tea = createMenuItem(store, { name: 'Tea', description: 'Not a Soft Drink', price: 200, category: 'Drink'});
    service.addItem(coke);
    service.addItem(tea);

    assert.equal(order.get('items.length'), 2, 'The order has two item');
    assert.equal(order.get('items.firstObject.menuItem'), coke, 'The first order item is coke');
  });
});

test('it can increment the quantity of something already in the cart', function(assert) {
  Ember.run(() => {
    let service = this.subject();
    let store = service.get('store');
    let order = service.get('order');
    let coke = createMenuItem(store);
    service.addItem(coke);
    service.addItem(coke);

    assert.equal(order.get('items.length'), 1, 'The order has only one coke order item in the cart');
    assert.equal(order.get('items.firstObject.menuItem'), coke, 'The first order item is coke');
    assert.equal(order.get('items.firstObject.quantity'), 2, 'There should be a quantity of two cokes');
  });
});
