const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  address: {
    type: Object,
    required: true
  },
  borough: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },

  //se actualiza
  grades: {
    type: [{
      grade: { 
        type: String
       }
    }], 
    required: true
  },
  name: {
    type: String,
    required: true
  },
  restaurant_id: {
    type: String,
    required: true
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;