function Person(name , age , gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = {};

Person.apply(foo , ['foo' , 22 , 'male']);

console.log(foo);