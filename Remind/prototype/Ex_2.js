function Person(name , age , gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = new Person('drogba' , 27 , 'male');

console.log(foo.hasOwnProperty('name'));
console.log(foo.hasOwnProperty('age'));
console.log(foo.hasOwnProperty('gender'));
console.log(foo.hasOwnProperty('money'));

console.log(Person.prototype);
console.log(Person.prototype.constructor);