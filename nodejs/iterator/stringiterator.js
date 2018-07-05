let str = "Hello";

console.log(typeof(str[Symbol.iterator]()));

let str_next = str[Symbol.iterator]();
console.log(str_next.next());
console.log(str_next.next());
console.log(str_next.next());
console.log(str_next.next());
console.log(str_next.next());
console.log(str_next.next());

