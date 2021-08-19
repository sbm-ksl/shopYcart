import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('category',{ path: '/category/:cid' });
  this.route('cart');
  this.route('description',{ path: '/description/:pid' });
  this.route('login');
});

export default Router;
