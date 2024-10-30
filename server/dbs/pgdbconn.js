import redis from 'redis';
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Error: ${err}`);
});

client.set('string key', 'string val');
