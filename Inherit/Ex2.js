var o = {
    a: 2,
    m: function(b) {
        return this.a + 1;
    }
};

console.log(o.m());

var p = Object.create(o);

p.a = 12;
console.log(p.m());

function Test() {

}

var t = new Test();
