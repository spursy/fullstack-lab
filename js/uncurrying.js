
var uncurrying= function (fn) {
    return function () {
        var args=[].slice.call(arguments,1);
        return fn.apply(arguments[0],args);        
    }    
};
var test = "a, b, c"
var split=uncurrying(String.prototype.split); 
console.log(split(test,','));  