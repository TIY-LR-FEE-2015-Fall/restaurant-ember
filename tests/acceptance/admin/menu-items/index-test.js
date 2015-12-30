import { test } from 'qunit';
import moduleForAcceptance from 'restaurant-ember/tests/helpers/module-for-acceptance';
import page from 'restaurant-ember/tests/pages/admin/menu-items/index';

moduleForAcceptance('Acceptance | admin/menu items/index');

test('Admins can visit menu items index', function(assert) {
  page.setup().visit();

  andThen(function() {
    assert.equal(currentURL(), '/admin/menu-items');
  });
});

test('Admins can see list of menu items', function(assert) {
  page.setup().visit();

  andThen(function() {
    let firstItem = page.menuItems(1);

    assert.equal(page.menuItems().count(), 4, 'There are four menu items');
    assert.equal(firstItem.name(), 'Startup Chicken', 'The first name is shown');
    assert.equal(firstItem.description(),
      'This chicken is accelerated, bootstrapped, web scaled, and then battered and fried.',
      'The first description is shown'
    );
    assert.equal(firstItem.price(), 100.00, 'The first price is shown');
  });
});

test('Admins can navigate to create a new menu item', function(assert) {
  page.setup().visit().new();

  andThen(function() {
    assert.equal(currentURL(), '/admin/menu-items/new');
  });
});

test('Admins can navigate to edit the first menu item', function(assert) {
  page.setup().visit()
    .menuItems(1).edit();

  andThen(function() {
    assert.equal(currentURL(), '/admin/menu-items/1');
  });
});
