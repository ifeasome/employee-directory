const redis = require('redis');
require('dotenv').config();

let redisClient;

(async function () {
    redisClient = redis.createClient({ legacyMode: true });
    await redisClient.connect();
})(); 

redisClient.on("connect", function (err) {
    console.log('Connected to redis successfully');
  }); 

  redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
  });
  
  module.exports = redisClient;