const { pool } = require('../config/db');

const getSeats = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM seats');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateSeatStatus = async (seatId, status) => {
  try {
    await pool.query('UPDATE seats SET status = $1 WHERE id = $2', [status, seatId]);
  } catch (err) {
    console.error('Error updating seat status:', err);
    throw err;
  }
};

module.exports = { getSeats, updateSeatStatus };

