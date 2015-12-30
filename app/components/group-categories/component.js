import Ember from 'ember';

export default Ember.Component.extend({
  categoryGroups: [],

  // Runs whenever our component attributes change
  didReceiveAttrs() {
    let menuItems = this.getAttr('items');

    let grouped = menuItems.reduce((carry, curr) => {
      let categoryName = curr.get('category');
      let alreadyExising = carry.find((categoryGroup) => {
        return categoryGroup.name === categoryName;
      });

      if (alreadyExising) {
        alreadyExising.items.push(curr);
      } else {
        carry.push({
          name: categoryName,
          items: [curr],
        });
      }

      return carry;
    }, []);

    this.set('categoryGroups', grouped);
  },
});
