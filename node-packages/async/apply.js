let slice = function(array, start=0) {
    let slice_array = [];
    let max_length = Math.max(array.length - start, 0);
    for (let i=0; i<max_length; i++) {
        slice_array.push(array[start+i]);
    }
    return slice_array;
}

let Apply = function(fn) {
    let args = slice(arguments, 1);
    return function() {
        let call_args = slice(arguments)
        return fn.apply(null, args.concat(call_args));
    }
}

let result = Apply(function(name){return 'hello ' + name;}, 'world')()

console.log(result);
