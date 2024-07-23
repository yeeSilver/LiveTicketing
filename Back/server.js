const express = require('express');
const mongoose = require('mongoose');
const seatRoutes = require('./routes/seatRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectToCache } = require('./utils/cache');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ticketing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to Elastic Cache
connectToCache();

app.use('/api/seats', seatRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
