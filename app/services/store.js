import Ember from 'ember';

export default Ember.Service.extend({
  orders: Ember.A(),

  getProducts() {
    return [{
      cid: '1',
      pid: '1',
      title: 'The 40 Rules of Love',
      description: 'Ella Rubinstein has a husband, three teenage children, and a pleasant home. Everything that should make her confident and fulfilled. Yet there is an emptiness at the heart of Ellas life - an emptiness once filled by love. So when Ella reads a manuscript about the thirteenth-century Sufi poet Rumi and Shams of Tabriz, and his forty rules of life and love, she is shocked out of herself. Turning her back on her family she embarks on a journey to meet the mysterious author of this work.It is a quest infused with Sufi mysticism and verse, taking Ella and us into an exotic world where faith and love are heartbreakingly explored...',
      price: 321,
      imageUrl: 'https://rukminim1.flixcart.com/image/312/312/book/9/3/9/the-forty-rules-of-love-original-imae5jy9d5vb8tqz.jpeg'
    }, {
      cid: '1',
      pid: '2',
      title: 'Harry Potter and the Goblet of Fire',
      description: 'Harry starts his fourth year at Hogwarts, and yet again, he and his friends invite a danger so wicked, that it finally dawns on Harry why He Who Must Not Be Named is actually dreaded.',
      price: 314,
      imageUrl: 'https://rukminim1.flixcart.com/image/312/312/book/6/8/3/harry-potter-and-the-goblet-of-fire-original-imaepgzxzy4v4jyh.jpeg'
    }, {
      cid: '1',
      pid: '3',
      title: 'Many Lives, Many Masters',
      description: 'Many Lives Many Masters is the real-life account of a psychiatrist’s life-changing discovery of past-life regression during the course of his patient’s therapy.',
      price: 240,
      imageUrl: 'https://rukminim1.flixcart.com/image/312/312/book/7/8/6/many-lives-many-masters-the-true-story-of-a-prominent-original-imaejb5p2bhhfupn.jpeg'
    }, {
      cid: '2',
      pid: '4',
      title: 'SayItLoud Solid Mens Round Neck Black T-Shirt',
      description: 'The cool black melange and black, round neck sports trim full sleeve t-shirt for men is made from 100% premium cotton which is pre-shrunk and bio-washed for longevity is a perfect treat for Men & Boys who like to move out in style. Manufactured by Say It Loud, one of the leading online sellers for printed t-shirts in India. For more cool sleeveless, Half Sleeve & Full Sleeve T-shirts, check out the entire collection of Sayitloud for both Men & women.',
      price: 449,
      imageUrl: 'https://rukminim1.flixcart.com/image/312/312/t-shirt/w/f/g/m-c33solidblackmelangeblackdarkgreyblackgreynavy-sayitloud-original-imaehfytzzzazfyf.jpeg?q=70'
    }, {
      cid: '2',
      pid: '5',
      title: 'Maniac Solid Mens Polo Neck White T-Shirt',
      description: 'For a stylish casual incarnation, go for this polo T-shirt. With its simple styling and perfect fit, it is sure to turn into your casual option. Style it with a pair of slim fit jeans or chinos and buckskins for an aesthetic look.',
      price: 429,
      imageUrl: 'https://rukminim1.flixcart.com/image/312/312/t-shirt/g/z/g/nyc-collar-maniac-s-original-imae7c2qvp7secqf.jpeg?q=70'
    }, {
      cid: '2',
      pid: '6',
      title: 'Teesort Solid Mens Henley Grey T-Shirt',
      description: 'This soft long sleeves t-shirt is eye-catching by its stylish design and cut. The smart t-shirt for men is a dapper way to upgrade your T-shirt drawer. The henley neck is really in vogue and is super comfortable and smart.The fabric is soft and color fastness is guaranteed. Cut for slim fit, this piece with jeans and sneakers is sure to become your weekend go-to. A raglan sleeve henley t-shirt for men is a type of sleeve whose distinguishing characteristic is to extend in one piece fully to the collar, leaving a diagonal seam from underarm to collarbone giving the garment a relatively undefined look.',
      price: 499,
      imageUrl: 'https://rukminim1.flixcart.com/image/312/312/t-shirt/n/t/e/m-tsx-raghen-f-teesort-original-imaeqf2kwfwzstnh.jpeg?q=70'
    }];
  },
  saveOrder(order) {
    this.get('orders').pushObject(order);
  },
  getOrders() {
    return this.get('orders');
  },
  removeOrder(order) {
    this.get('orders').removeObject(order);
  }
});

