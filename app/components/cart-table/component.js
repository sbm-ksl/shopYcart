import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  orders: Ember.A(),
  isCartEmpty: true,

  init() {
    this._super(...arguments);
    Ember.set(this, 'isCartEmpty', (this.get('store').getOrders().length < 1));
    Ember.set(this, 'orders', (this.get('store').getOrders()));
  },

  totalPrice: Ember.computed('orders.[]', function () {
    const placedOrder = this.get('store').getOrders();
    let totalPrice = 0;
    placedOrder.forEach((item) => {
      totalPrice = totalPrice + item.price;
    });
    return totalPrice;
  }),

  actions: {
    removeProduct(order) {
      this.get('store').removeOrder(order);

      if (this.get('store').getOrders().length === 0) {
        Ember.set(this, 'isCartEmpty', true);
      } 
    }
  }
});

