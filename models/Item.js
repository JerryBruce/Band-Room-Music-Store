const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
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
        type: String,
        required: false
    },
    cost: {
        rent: {
            type: Number,
            required: true
        },
        buy: {
            type: Number,
            required: false
        }
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item