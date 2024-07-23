const express = require('express');
const { connectDB } = require('./config/db');
const { connectToCache } = require('./config/cache');
const seatRoutes = require('./routes/seatRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to PostgreSQL
connectDB();

// Connect to Elastic Cache (Redis)
connectToCache();

app.use(express.json());
app.use('/api/seats', seatRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


