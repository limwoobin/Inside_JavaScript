function Person(name , age , gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var applyTest = {};

Person.apply(applyTest , ['foo' , 30 , 'man']);
console.dir(applyTest);


var callTest = {};

Person.call(callTest , 'bar' , 25 , 'woman');
console.dir(callTest);