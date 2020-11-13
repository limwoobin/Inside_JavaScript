// 단점 - Person 의 prototype 객체에 접근 못함
var Person = function(value) {
    var name = value ? value : 'drogba';

    return {
        getName: function() {
            return name;
        },
        setName: function(value) {
            name = value;
        }
    }
}


var me = Person(); // or new Person();
console.log(me.getName());