import PageObject from 'restaurant-ember/tests/page-object';
import setup from 'restaurant-ember/tests/scenarios/default';

// Destructuring
// let visitable = PageObject.visitable
// let collection = PageObject.collection
let { visitable, fillable, clickable } = PageObject;

function role(name) {
  return `[data-role=${name}]`;
}

export default PageObject.create({
  setup() {
    setup();
    return this;
  },

  visit: visitable('/admin/menu-items/new'),

  submit: clickable(role('submit')),

  name: fillable(role('input-name')),
  description: fillable(role('input-description')),
  price: fillable(role('input-price')),
});
