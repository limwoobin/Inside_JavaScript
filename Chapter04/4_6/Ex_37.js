function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

console.dir(Person);
console.dir(foo);

console.log(Person.prototype == foo.__proto__);