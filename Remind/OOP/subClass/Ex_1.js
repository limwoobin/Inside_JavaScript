function subClass(obj) {
    var parent = this === global ? Function : this;
    var F = function() {}

    var child = function() {
        var _parent = child.parent;
        if (_parent && _parent !== Function) {
            console.log('_parent' , child.parent);
            console.log('1 if')
            _parent.apply(this , arguments);
        }

        if (child.prototype._init) {
            console.log('2 if');
            child.prototype._init.apply(this , arguments);
        }
    };

    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.subClass = arguments.callee;

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            child.prototype[i] = obj[i];
        }
    }

    return child;
}

var person_obj = {
    _init: function() {
        console.log('person init');
    },
    getName: function() {
        return this._name;
    },
    setName: function(name) {
        this._name = name;
    }
};

var student_obj = {
    _init: function() {
        console.log('student init');
    },
    getName: function() {
        return 'Student Name: ' + this._name;
    }
};

var Person = subClass(person_obj);
var person = new Person();
// person.setName('drogba');
// console.log(person.getName());

console.log('-----------------------------');

var Student = Person.subClass(student_obj);
var student = new Student();
// student.setName('mikel');
// console.log(student.getName());
