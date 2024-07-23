const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: String,
  isAvailable: Boolean,
  userId: String,
  purchaseDate: Date,
});

module.exports = mongoose.model('Seat', seatSchema);
