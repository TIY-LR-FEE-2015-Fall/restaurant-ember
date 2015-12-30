import PageObject from 'restaurant-ember/tests/page-object';
import setup from 'restaurant-ember/tests/scenarios/default';

// Destructuring
// let visitable = PageObject.visitable
// let collection = PageObject.collection
let { visitable, clickable, collection, text } = PageObject;

function role(name) {
  return `[data-role=${name}]`;
}

export default PageObject.create({
  setup() {
    setup();
    return this;
  },

  visit: visitable('/admin/menu-items'),

  new: clickable(role('new-menu-item')),

  // adminNav: Edit Menu Button and View Orders Button
  // topNav: Edit Menu Button and View Orders Button

  menuItems: collection({
    itemScope: role('menu-item'),

    item: {
      name: text(role('menu-item__name')),
      price: text(role('menu-item__price')),
      description: text(role('menu-item__description')),

      edit: clickable(role('menu-item__edit')),
    },
  }),
});
