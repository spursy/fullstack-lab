var Delay_Time = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    } )
}

var Delay_Print = async function(ms) {
    await Delay_Time(ms)
    return new Promise(function(resolve, reject) {
        resolve("END");
    })
}

Delay_Print(500).then(function(resolve) {
    console.log(resolve);
})





