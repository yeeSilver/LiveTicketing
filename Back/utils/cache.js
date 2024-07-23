const redis = require('redis');
const client = redis.createClient({
  host: 'your-redis-endpoint',
  port: 6379,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

const connectToCache = () => {
  client.on('connect', () => {
    console.log('Connected to AWS Elasticache Redis');
  });
};

module.exports = { connectToCache, client };

