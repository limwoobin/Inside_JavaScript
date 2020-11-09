var Person = function(arg) {
    var name = arg ? arg : 'drogba';

    return {
        getName : function() {
            return name;
        },
        setName : function(arg) {
            name = arg;
        }
    };
}

var me = new Person();
console.log(me.getName());