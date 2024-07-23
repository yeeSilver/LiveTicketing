const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis error:', err);
});

const connectToCache = () => {
  client.on('connect', () => {
    console.log('Connected to Redis');
  });
};

module.exports = { connectToCache, client };
