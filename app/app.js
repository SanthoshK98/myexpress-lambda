// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
// exports.lambdaHandler = async (event, context) => {
//     try {
//         // const ret = await axios(url);
//         response = {
//             'statusCode': 200,
//             'body': JSON.stringify({
//                 message: 'hello world',
//                 // location: ret.data.trim()
//             })
//         }
//     } catch (err) {
//         console.log(err);
//         return err;
//     }

//     return response
// };

const express = require('express')
const serverless = require('serverless-http')
const app = express()

app.get('/get',(req,res)=>{
    return res.json({message:"Hello World"})
})

app.listen(5000,()=>{
    console.log(`Listening on PORT ${5000}`)
})

module.exports.handler = serverless(app)
