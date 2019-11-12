const redis = require('redis');
const session = require('express-session');

let redisStore = require('connect-redis')(session);
let redisClient = redis.createClient();


module.exports = new redisStore({
    client: redisClient
    //host: process.env.REDIS_URI,
    //port: process.env.REDIS_PORT,
    //pass: process.env.REDIS_PASS
});