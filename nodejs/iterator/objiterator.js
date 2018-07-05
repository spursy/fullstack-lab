let arr = ['red', 'green', 'blue'];
let obj = {};

obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
for(let item of obj) {
    console.log(item);
}

