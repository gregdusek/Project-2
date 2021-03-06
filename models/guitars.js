const { urlencoded } = require('express');
const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
    brand:  { type: String, required: true },
    model:  { type: String, required: true },
    img:  { type: String, required: true },
    price:  { type: Number, required: true },
    qty:  { type: Number, required: true },
});



module.exports = mongoose.model('Guitar', guitarSchema);
