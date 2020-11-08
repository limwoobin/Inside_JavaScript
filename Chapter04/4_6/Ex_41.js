function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

Person.prototype.sayHello = function() {
    console.log('Hello');
}

foo.sayHello();