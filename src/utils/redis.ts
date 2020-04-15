const asyncRedis = require("async-redis");//const redis = require('redis');

// Redis Configurate
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = asyncRedis.createClient(REDIS_PORT);

export async function setDataRedis(key: string, value: any) {
    return await client.set(key, value);
};

export async function getDataRedis(key: string) {
    // await client.flushall(key);
    let val = await client.get(key);
    return val;
};