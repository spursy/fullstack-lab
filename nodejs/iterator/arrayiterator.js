let arr = ['a', 'b', 'c', 'd'];

// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for (let item of arr) {
    console.log(item);
}


for (let index in arr) {
    console.log(index);
}