function subClass(obj) {
    var parent = this === global ? Function : this;
    var F = function() {}

    var child = function() {
        var _parent = child.parent;

        if (_parent && _parent !== Function) {
            _parent.apply(this , arguments);
        }

        if (child.prototype._init) {
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


var person = function(arg) {
    var name = undefined;

    return {
        _init: function(arg) {
            name = arg ? arg : 'drogba';
        },
        getName: function() {
            return name;
        },
        setName: function(arg) {
            name = arg;
        }
    };
}

Person = subClass(person());
var a = new Person('a');
console.log(a.getName());

Student = Person.subClass();
var student = new Student('Student');
console.log(student.getName());