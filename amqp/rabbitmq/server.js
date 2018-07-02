const amqp = require('amqplib');
const path = require('path');
let amqp_config = path.join(__dirname, './amqp.yml');
const readYaml = require('read-yaml');
const q = 'peatio.deposit.coin';

let GetAMQPOptions = function() {
    let amqp_options = readYaml.sync(amqp_config).connect;
    return amqp_options;
}

//定义回传消息函数
var ackSend = function(ch, msg,content){
    //要注意这里我们之前传上来的队列名和uuid会被保存在msg对象的properties中
    //因为服务端并不知道回传的队列名字，所以我们需要把它带过来
    ch.sendToQueue(msg.properties.replyTo,new Buffer(content.toString()),
        {correlationId:msg.properties.correlationId});
    //ack表示消息确认机制。这里我们告诉rabbitmq消息接收成功。
    ch.ack(msg);
}

amqp.connect(GetAMQPOptions()).then(function(conn){
    process.once('SIGN',function(){
      conn.close();
    });
    
    return conn.createChannel().then(function(ch){
  //设置公平调度，这里是指rabbitmq不会向一个繁忙的队列推送超过1条消息。
      ch.prefetch(1);
      //监听队列q并消费
      var ok = ch.assertQueue(q,{durable:false}).then(function(){
        ch.consume(q,((msg) => {
            console.log("Already come in ... " + msg.content.toString());
            ackSend(ch, msg, msg.content);
        }),{noAck:false});
      });
      return ok.then(function(){
        console.log(' [*] waiting for message')
      })
    })
  }).then(null,console.error);