const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    trim: true
  },
  series: {
    type: String,
    required: true,
    trim: true
  },
  stock: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: false
  },
  rent: {
    type: String,
    required: true
  },
  buy: {
    type: String,
    required: false
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
