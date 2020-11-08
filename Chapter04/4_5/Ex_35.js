function Person(name , age , gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return {name: 'bar' , age: 20 , gender: 'woman'};
}

function Person2(name , age , gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = new Person('foo' , 30 , 'man');
var foo2 = new Person2('foo' , 30 , 'man');

console.dir(foo);
console.dir(foo2);