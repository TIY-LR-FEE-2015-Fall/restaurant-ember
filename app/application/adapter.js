import DS from 'ember-data';
import config from 'restaurant-ember/config/environment';

export default DS.RESTAdapter.extend({
  host: config.apiHost,

  namespace: 'api',
});
