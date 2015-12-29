import PageObject from 'restaurant-ember/tests/page-object';

// Destructuring
// let visitable = PageObject.visitable
// let collection = PageObject.collection
let { visitable, collection, text } = PageObject;

function role(name) {
  return `[data-role=${name}]`;
};

export default PageObject.create({
  visit: visitable('/admin/orders'),

  // adminNav: Edit Menu Button and View Orders Button
  // topNav: Edit Menu Button and View Orders Button

  orders: collection({
    itemScope: role('order-detail'),

    item: {
      orderItems: collection({
        itemScope: role('order-detail-order-item'),

        item: {
          name: text(role('order-detail-order-item__name')),
          quantity: text(role('order-detail-order-item__quantity')),
          price: text(role('order-detail-order-item__price')),
        },
      }),

      total: text(role('order-detail__total')),
    },
  }),
});
