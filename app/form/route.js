import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return 'exists';
  },
  actions: {
    foo() {
      debugger;
    },
  },
});
