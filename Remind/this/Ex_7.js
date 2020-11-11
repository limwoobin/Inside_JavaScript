var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};

console.log(o.f());


var o2 = {
    f: function() {
        return this.a + this.b;
    }
};

var p = Object.create(o2);
p.a = 1;
p.b = 3;

console.log(p.f());