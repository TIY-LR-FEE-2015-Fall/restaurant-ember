import { test } from 'qunit';
import moduleForAcceptance from 'restaurant-ember/tests/helpers/module-for-acceptance';
import page from 'restaurant-ember/tests/pages/admin/menu-items/new';
import indexPage from 'restaurant-ember/tests/pages/admin/menu-items/index';

moduleForAcceptance('Acceptance | admin/menu items/new');

test('Admins can visit menu items new', function(assert) {
  page.setup().visit();

  andThen(function() {
    assert.equal(currentURL(), '/admin/menu-items/new');
  });
});

test('Admins can see a form', function(assert) {
  page.visit();

  andThen(function() {
    assert.ok(page.name(), 'There is a name input');
    assert.ok(page.description(), 'There is a description input');
    assert.ok(page.price(), 'There is a price input');
  });
});

test('Admins create a new menu item', function(assert) {
  page.visit()
  .name('Coffee')
  .description('A hot drink')
  .price(20)
  .submit();

  andThen(function() {
    assert.equal(currentURL(), '/admin/menu-items', 'It redirects after saving');
    assert.equal(server.db.menuItems.length, 1, 'It saves the menu item to the API');

    let firstItem = indexPage.menuItems(1);

    assert.equal(indexPage.menuItems().count(), 1, 'The new item is listed in the index');
    assert.equal(firstItem.name(), 'Coffee', 'The first name is shown');
    assert.equal(firstItem.description(), 'A hot drink', 'The first description is shown');
    assert.equal(firstItem.price(), 20, 'The first price is shown');
  });
});
