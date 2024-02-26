const mongoose = require('mongoose');
const { Schema } = mongoose;

// SCHEMA
const bookSchema = new Schema ({
    title: { tpye: String, required: true },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageURL: { type: String },
});

const Books = mongoose.model('Books', bookSchema)
module.exports = Books;