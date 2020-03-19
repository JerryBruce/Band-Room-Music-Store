const mongoose = require('mongoose');

<<<<<<< HEAD
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
    type: Number,
    required: false
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
    type: Number,
    required: false
  },
  buy: {
    type: Number,
    required: false
  }
});
=======
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
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: Buffer,
        required: false
    },
    rent: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: false
    }
})
>>>>>>> d2dc57f4d5b5a13aca2983958425ef891e64a25f

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
