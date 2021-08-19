import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  store: Ember.inject.service(),

  model(params) {
    return RSVP.hash({
    	products: this.get('store').getProducts().filterBy('cid', params.cid),
    	cid: params.cid
    });
  }
});

