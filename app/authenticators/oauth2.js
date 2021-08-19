import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';
const {
  RSVP, isEmpty, run
} = Ember;

export default Base.extend({

  tokenEndpoint: `${config.apiHost}/token`,

  authenticate(param) {
    return new RSVP.Promise((resolve, reject) => {
      let data = `grant_type=password`;
      data = `${data}&username=${encodeURIComponent(param.username)}`;
      data = `${data}&password=${encodeURIComponent(param.password)}`;
      this.makeRequest(this.tokenEndpoint, data, 'json', null).then((response, xhr) => {
        run(() => {
          resolve(response);
        });
      }, (xhr) => {
        run(() => {
          reject(xhr);
        });
      });
    });
  },

  makeRequest(url, data, dataType, header) {
    const options = {
      url,
      data,
      type: 'POST',
        dataType: dataType,
        contentType: 'application/x-www-form-urlencoded'
    };

    if (!isEmpty(header)) {
      options.headers = header;
    }

    return Ember.$.ajax(options);
  }
});