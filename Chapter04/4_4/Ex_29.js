// 객체 리터럴 방식
var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};

console.dir(foo);


// 생성자 함수
function Person(name , age , gender , position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.position = position;
}

var bar = new Person('bar' , 33 , 'woman');
console.dir(bar);

var baz = new Person('baz' , 25 , 'woman');
console.dir(baz);