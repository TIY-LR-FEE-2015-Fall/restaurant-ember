export default function(server) {
  server.create('menuItem', {
    name: 'Startup Chicken',
    description: 'This chicken is accelerated, bootstrapped, web scaled, and then battered and fried.',
    price: 100.00,
    category: 'Entree',
  });

  server.createList('menuItem', 3);

  server.create('order', {items: [1, 2]});

  server.create('orderItem', {menuItem: 1, quantity: 1, order: 1});
  server.create('orderItem', {menuItem: 2, quantity: 2, order: 1});
}
