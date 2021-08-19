/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'shopy-cart',
    environment: environment,
    apiHost: '',
    apiNamespace: '',
    isLogging: false,
    rootURL: '/',
    apiURL: '',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    Logger: {
      storageLimit: 2500,
      disableExceptionHandling: false,
      storageKey: 'disaLog',
      urlFlagParam: 'debug',
      loggerContract: 'Log'
    },

    APP: {
      version: ''
        // Here you can pass flags/options to your application instance
        // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.version = '0.0.0.9';
    ENV.isLogging = true;
    ENV.apiHost = 'http://localhost:8123';
    ENV.apiNamespace = 'api/v1';
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.APP.version = '0.0.0.9';
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.isLogging = true;
    ENV.apiHost = 'http://172.16.120.25:8019';
    ENV.apiNamespace = 'api/v1';
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'production') {
    ENV.APP.version = '0.0.0.0';
    ENV.isLogging = true;
    ENV.apiHost = 'http://localhost:8609';
    ENV.apiNamespace = 'api/v1';
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  ENV.apiURL = ENV.apiHost + '/' + ENV.apiNamespace;
  return ENV;
};