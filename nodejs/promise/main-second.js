const main = require('./main.js');

let TestPromises = async function() {
    var result = await main.getPromises();
    console.log(">>>>" + result);
}

TestPromises();
