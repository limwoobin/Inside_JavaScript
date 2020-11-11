var obj = {a: 1};

var copy = Object.assign(obj);

console.log(obj);
console.log(copy);


var x1 = 10;
var x2 = Object.assign(x1);

console.log(x1);
console.log(x2);

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const object = Object.assign(o2, o1, o3);
console.log(object); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 대상 객체 자체가 변경됨.