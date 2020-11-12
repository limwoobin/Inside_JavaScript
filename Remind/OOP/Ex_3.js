var person = {
    name: 'drogba',
    setName: function(value) {
        this.name = value;
    },
    getName: function() {
        return this.name;
    }
}

function create_object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var wb = create_object(person);

console.log(wb.name);
wb.setName('woobeen');
console.log(wb.getName());