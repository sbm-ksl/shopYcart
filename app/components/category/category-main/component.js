import Ember from 'ember';

export default Ember.Component.extend({
  headerName: null,
  hasProducts: false,

  didReceiveAttrs(...args) {
    this._super(...args);
    this.checkProductsAvailable(this.get('model').cid);
    this.setHeaderName(this.get('model').cid);
  },

  checkProductsAvailable(cid) {
  	if(Ember.isEqual(this.get('model').products.length, 0)){
  		Ember.set(this, 'hasProducts', false);
  	}else{
  		Ember.set(this, 'hasProducts', true);
  	}
  },

  setHeaderName(cid) {
    if (Ember.isEqual(cid, '1')) {
      Ember.set(this, 'headerName', 'Books');
    } else if (Ember.isEqual(cid, '2')) {
      Ember.set(this, 'headerName', 'T-Shirts');
    }

  }
});

