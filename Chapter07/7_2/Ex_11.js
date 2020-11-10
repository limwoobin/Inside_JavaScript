var print_all = function(arg) {
    for (var i in this) console.log(i + " : " + this[i]);
    for (var i in arguments) console.log(i + " : " + arguments[i]);
}

var myobj = {name: 'drogba'};

var myFunc = print_all.bind(myobj);
myFunc();

var myFunc1 = print_all.bind(myobj , "maluda" , "others");
myFunc1("insides");