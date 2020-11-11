var myObject = {
    name: 'foo',
    sayName: function() {
        console.log(this.name);
    }
}

myObject.sayName();


var otherObject = {
    name: 'baz'
}

otherObject.sayName = myObject.sayName;
otherObject.sayName();

var thirdObject = {
    name: 'third'
}

myObject.sayName.call(thirdObject);
otherObject.sayName.apply(thirdObject);