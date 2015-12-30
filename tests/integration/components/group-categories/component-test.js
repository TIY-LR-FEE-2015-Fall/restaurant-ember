import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('group-categories', 'Integration | Component | group categories', {
  integration: true
});

test('it renders', function(assert) {

  this.set('items', [Ember.Object.create({category: 'Foo', name: 'Bar'})]);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{group-categories items=items}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#group-categories items=items as |category|}}
      {{category.name}}
    {{/group-categories}}
  `);

  assert.equal(this.$().text().trim(), 'Foo');
});
