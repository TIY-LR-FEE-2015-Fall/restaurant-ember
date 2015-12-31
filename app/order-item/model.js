import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.belongsTo('order'),
  menuItem: DS.belongsTo('menuItem'),
  quantity: DS.attr(),
  price: DS.attr(),
});
