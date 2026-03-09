const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  duration: {
    type: String
  },
  image: {
    type: String,
    default: '/images/service-default.jpg'
  },
  features: [{
    type: String
  }],
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Service', serviceSchema);
