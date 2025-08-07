import redis from "redis";

const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
})

redisClient.on('connect', () => {
    console.log('Redis client connected');
})

redisClient.on('error', (err) => {
    console.error('Redis client error:', err);
})

export default redisClient;