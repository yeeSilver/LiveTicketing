const { client } = require('../config/cache');
const { sendMessageToSQS } = require('../services/sqsService');
const { updateSeatStatus } = require('./seatController');

const processPayment = async (req, res) => {
  const { paymentId, seatId, userId, amount } = req.body;

  client.get(paymentId, async (err, reply) => {
    if (err) {
      return res.status(500).json({ message: 'Error checking cache' });
    }

    if (reply) {
      return res.status(400).json({ message: 'Payment ID already exists' });
    }

    try {
      // Add payment ID to cache to prevent duplicate processing
      client.setex(paymentId, 3600, 'processing'); // Expires in 1 hour

      // Check if seat is available
      const seatResult = await pool.query('SELECT status FROM seats WHERE id = $1', [seatId]);
      if (seatResult.rows.length === 0 || seatResult.rows[0].status !== 'available') {
        return res.status(400).json({ message: 'Seat is not available' });
      }

      // Send payment info to SQS for further processing
      await sendMessageToSQS({ paymentId, seatId, userId, amount });

      // Mark seat as reserved in the database
      await updateSeatStatus(seatId, 'reserved');

      res.status(200).json({ message: 'Payment request received' });
    } catch (err) {
      client.del(paymentId); // Remove from cache on failure
      res.status(500).json({ message: 'Error processing payment' });
    }
  });
};

module.exports = { processPayment };
