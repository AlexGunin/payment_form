const { Schema, model } = require('mongoose');

const Payment = new Schema({
  card_number: { type: String, required: true },
  expiration_date: { type: String, required: true },
  cvv: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = model('Payment', Payment);
