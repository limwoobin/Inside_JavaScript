var obj = {
    a : 13,
    b : 15
} 

function test() {
    return this.a + this.b;
}

console.log(test.call(obj));


var emptyObj = {

};

function emptyTest(x , y) {
    this.x = x;
    this.y = y;
}

emptyTest.call(emptyObj , 10 , 11);
console.log(emptyObj);

