const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    small: {
        type: Buffer
    },
    large: {
        type: Buffer
    }
})