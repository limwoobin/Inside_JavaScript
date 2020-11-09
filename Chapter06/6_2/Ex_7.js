function Person(arg) {
    this.name = arg;
}

Person.prototype.setName = function(value) {
    this.name = value;
};

Person.prototype.getName = function() {
    return this.name;
};

// function Student(arg) {

// }

function Student(arg) {
    Person.apply(this , arguments);
}

var you = new Person("drogba");
Student.prototype = you;

var me = new Student("maluda");
// me.setName("zzzonn");
console.log(me.getName());