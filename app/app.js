const Redis = require('ioredis')
const express = require('express')
const serverless = require('serverless-http')
const app = express()

const redis = new Redis({
    host:'mycloudredis.g4lpvv.ng.0001.aps1.cache.amazonaws.com',
    port: 6379
})

const redisFunc = async()=>{
    // Set a value
await redis.set('myKey', 'myValue');

// Get a value
const value = await redis.get('myKey');
console.log(value);
}
redisFunc()

app.get('/get',(req,res)=>{
    return res.json({message:"Hello World"})
})

app.listen(5000,()=>{
    console.log(`Listening on PORT ${5000}`)
})

module.exports.handler = serverless(app)
