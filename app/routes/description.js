import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  store: Ember.inject.service(),

  model(params) {
    return this.get('store').getProducts().findBy('pid', params.pid);
  },

  actions: {
    addToCart(model) {
      console.log("Your Product " + model.pid + " has been added successfully.");
      this.get('store').saveOrder(model);
    }
  }
});

