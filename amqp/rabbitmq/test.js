const amqp = require('./client');

let Init = async function() {
    //let temp_arr = [{name: "yy"}, {name: "spursyy"}];
    let temp_arr = [];
    temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    // temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    // temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    // temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    // temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    // temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    // temp_arr.push({"market_id":"elendeth","ask_id":8037,"bid_id":8036,"strike_price":"10","volume":"2.0","funds":"20","locale":"zh-CN"});
    let ret = await amqp.SendAMQPQueue(temp_arr);
    console.log(JSON.stringify(ret));
};

Init();