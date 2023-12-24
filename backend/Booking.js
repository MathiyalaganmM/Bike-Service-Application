const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  selectedOption: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Book = mongoose.model('Bookings', BookSchema);
module.exports = Book;