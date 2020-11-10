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


var args = Array.prototype.slice.call([1,2,3] , 1);
console.log(args);

var args2 = Array.prototype.slice.apply([1,2,3] , [1,3]);
console.log(args2);