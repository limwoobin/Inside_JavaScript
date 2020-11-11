// bind

function f() {
    return this.a;
}

var g = f.bind({a: 'artbox'});
console.log(g());

var h = f.bind({a : 'zoo'});
console.log(h());

var o = {
    a: 37 , 
    f: f , 
    g: g , 
    h: h
};
console.log(o.a , o.f() , o.g() , o.h());