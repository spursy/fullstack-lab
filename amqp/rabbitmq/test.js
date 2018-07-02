const amqp = require('./client');

let Init = async function() {
    let temp_arr = [{name: "yy"}, {name: "spursyy"}];
    let ret = await amqp.SendAMQPQueue(temp_arr);
    console.log(JSON.stringify(ret));
};

Init();