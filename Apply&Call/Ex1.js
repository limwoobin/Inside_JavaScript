var arr = ['a' , 'b'];
var arr2 = [1,2,3];

var array = arr.push.apply(arr , arr2);

console.log(array);
console.log(arr);
