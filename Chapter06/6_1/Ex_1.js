function Person(arg) {
    this.name = arg;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(value) {
        this.name = value;
    }
}

var me = new Person('drogba');
console.log(me.getName());

me.setName('maluda');
console.log(me.getName());