function Person(name) {
    this.name = name;
}

var man = new Person('drogba');

console.log(man.__proto__);
console.log(Person.prototype);

console.log(man.__proto__ === Person.prototype);