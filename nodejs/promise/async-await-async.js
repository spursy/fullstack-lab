
var delay_time = function(ms, param) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(new Date().getTime());
            resolve(param);
        }, ms)
    } )
}
var asyn_fun = async function (params) {
    var time_out = 1000;
    const results = await params.map(async param => {
      time_out = time_out + 1000;
      var out =  await delay_time(time_out, param);
      return out
    });
    var target = [];
    for(var ret of results) {
         target.push(await ret);
    }
    return await target;
};
asyn_fun(['First','Second','Third','Last']).then(function(result){
    console.log(JSON.stringify(result))
});