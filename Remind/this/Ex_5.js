var globalObject = this;
var foo = () => this;
console.log(globalObject === foo());

var obj = {func: foo};
console.log(obj.func() === globalObject);

console.log(foo.call(obj) === globalObject);

foo = foo.bind(obj);
console.log(foo() === globalObject);