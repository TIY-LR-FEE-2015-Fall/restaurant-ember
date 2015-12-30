import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  price() {
    return faker.finance.amount(0, 40);
  },
});
