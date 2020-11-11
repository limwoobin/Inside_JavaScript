function add(c , d) {
    return this.a + this.b + c + d;
}

var o = {
    a: 1,
    b: 3
}

var x1 = add.call(o , 5 , 7);
var x2 = add.apply(o , [10 , 20]);

console.log(x1);
console.log(x2);