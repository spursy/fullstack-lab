const amqp = require('amqplib');
const path = require('path');
let amqp_config = path.join(__dirname, './amqp.yml');
const readYaml = require('read-yaml');

let GetAMQPOptions = function() {
    let amqp_options = readYaml.sync(amqp_config).connect;
    return amqp_options;
}

var SendAMQPQueue = function(temp_trans) {     
    let amqp_options = GetAMQPOptions();
    return new Promise (async function(resolve, reject) {
        let conn, channel;
        let q = 'peatio.deposit.coin';
        try {
            let amqp_options = GetAMQPOptions();
            conn = await amqp.connect(amqp_options);
            let channel = await conn.createChannel();
    
            channel.assertQueue(q,{durable: false}).then(function(_qok){
                for (let i=0; i<temp_trans.length; i++) {
                    let msg = JSON.stringify(temp_trans[i]);
                    channel.sendToQueue(q, Buffer.from(msg));
                    console.log(`Send ${msg} to amqp.`);
                }
                
                resolve({status: 1});
            });
        } catch (error) {
            console.log(error.stack);
            resolve({status: 0});
        } finally {
            if (conn && channel) {
                channel.close();
                conn.close();
            }
        } 
    });
}

exports.SendAMQPQueue = SendAMQPQueue;