function Person(name , age , gender , position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.position = position;
}

var qux = Person('qux' , 22 , 'man');
console.log(qux);

console.log(global.name);
console.log(global.age);
console.log(global.gender);