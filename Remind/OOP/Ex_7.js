function Parent(value) {
    this.name = value;
    this.getName = function() {
        return this.name + ', hello';
    }
}

function Child(value) {
    Parent.call(this , value);
}

Child.prototype = new Parent('mikel');


var drogba = new Child('drogba');

console.log(drogba.getName());