import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      let param = {username,password};
      this.get('session').authenticate('authenticator:oauth2', param).catch(() => {
        Ember.set(this, 'errorMessage',"Incorrect Username or Password.");
      });
    }
  }
});