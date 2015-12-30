import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() {
    // Because our menu needs some BS!
    return faker.company.bs();
  },

  description() {
    return faker.hacker.phrase();
  },

  price() {
    return faker.finance.amount(0, 40);
  },

  category(index) {
    return [
      'Drink',
      'App',
      'Entree',
    ][index % 3];
  },
});
