let MakeIterator = function(arr) {
    let next_index = 0;
    return {
        next: function() {
            return next_index < arr.length ? {value: arr[next_index ++], done: false} : 
            {value: undefined, done: true};
        }
    };
};

let make_iterator = MakeIterator([1,2,3,4,5,6]);
console.log(make_iterator.next());
console.log(make_iterator.next());
console.log(make_iterator.next());
console.log(make_iterator.next());
console.log(make_iterator.next());
console.log(make_iterator.next());
console.log(make_iterator.next());





