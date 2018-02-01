var Delay_Time = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    } )
}
var Delay_Time_Second = function (ms) {
    setTimeout(function() {

    }, ms);
}
var Delay_Print = async function(ms) {
    Delay_Time_Second(1000);
    console.log("After Delay_Time_Second")
    await Delay_Time(ms)    
    console.log("After Delay_Time")
    return new Promise(function(resolve, reject) {
        resolve("END");
    })
}

Delay_Print(1000).then(function(resolve) {
    console.log(resolve);
})


var await_fun = async function() {
    return await "END";
}
await_fun().then((ret) => {
    console.log(ret);
})







