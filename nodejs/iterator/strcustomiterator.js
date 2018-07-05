let str = new String("Hello");
console.log(...str);

str[Symbol.iterator] = function() {
    return {
        next: function() {
            if (this._first) {
                this._first = false;
                return {
                    value: "GoBack", done: false
                }
            }  else {
                return { done: true };
            }
        },
        _first: true
    };
}

console.log([...str]);
