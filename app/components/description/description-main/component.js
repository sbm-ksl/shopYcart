import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addToCart(item) {
      this.sendAction('addToCart', item);
    }
  }
});

