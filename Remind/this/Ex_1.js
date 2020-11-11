function Person(name , age) {
    this.name = name;
    this.age = age;
}

var me = new Person('woobeen' , 27);
console.log(me.name);
console.log(me.age);


var me = Person('woobeen' , 27);
console.log(name);
console.log(age);

console.log('------------------------------------------');

function f1() {
    return this;
}

console.log(f1() === global);
console.log(this === global);
console.log(this);
console.log(global);
console.log(f1());