

function Person(name) {
    this.name = name;
}

Person.prototype.setName = function(value) {
    this.name = value;
};

Person.prototype.getName = function() {
    return this.name;
}

function Student(arg) {

}

var parent = new Person('drogba');
Student.prototype = parent;

var child = new Student('maluda');
child.setName('mikel');
console.log(child.getName());