import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
	actions:{
		loading(transition) {
	      const controller = this.controllerFor('application');
	      controller.set('currentlyLoading', true);

	      transition.promise.finally(() => {
	        controller.set('currentlyLoading', false);
	      });
	    }
	}
});