const express = require('express');
const Payment = require('../models/Payment');

const router = express.Router();

// payment
router.post('/payment', async (req, res) => {
  try {
    const {
      card_number, expiration_date, cvv, amount,
    } = req.body;
    const payment = new Payment({
      card_number, expiration_date, cvv, amount: +amount,
    });

    res.json({ RequestId: payment._id, amount: payment.amount }).status(200);
  } catch (err) {
    res.status(err.status);
  }
});

module.exports = router;
