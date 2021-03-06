var person = {
    name: 'drogba',
    getName: function() {
        return this.name;
    },
    setName: function(value) {
        this.name = value;
    }
};

function create_object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function extend(obj , prop) {
    if (!prop) {
        prop = obj;
        obj = this;
    }

    for (var i in prop) {
        obj[i] = prop[i];
    }

    return obj;
}

var student = create_object(person);
var added = {
    setAge: function(age) {
        this.age = age;
    },
    getAge: function() {
        return this.age;
    }
};

extend(student , added);

student.setAge(25);
console.log(student.getAge());

added.getAge = function() {
    return 'no';
}

console.log(student.getAge());