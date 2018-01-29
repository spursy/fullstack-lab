var Delay_Time = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, 20)
    } )
}

var Delay_Print = async function(ms) {
    await Delay_Time(20)
    return new Promise(function(resolve, reject) {
        resolve(3);
    })
}

Delay_Print(10).then(function(resolve) {
    console.log(resolve);
})





