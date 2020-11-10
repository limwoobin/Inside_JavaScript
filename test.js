function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name;
}

var man = new Person('hyuntae');

console.log(Person.hasOwnProperty('name'));
console.log(Person.prototype.hasOwnProperty('getName'));

console.log(man.hasOwnProperty('name'));
console.log(man);