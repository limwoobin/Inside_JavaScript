Function.prototype.bind = function(thisArg) {
    var fn = this,  // myFunc()가 호출되면 this 는 print_all 함수가 된다.
    slice = Array.prototype.slice,
    args = slice.call(arguments , 1);   // myObj
    return function() {
        // arguments -> 없음.
        return fn.apply(thisArg , args.concat(slice.call(arguments)));
    };
}


var print_all = function(arg) {
    for (var i in this) {
        console.log(i + " : " + this[i]);
    }

    for (var i in arguments) {
        console.log(i + " : " + arguments[i]);
    }
}

var myObj = {name: 'drogba'};

var myFunc = print_all.bind(myObj);
myFunc();

console.log('-----------------------------------');

var myFunc2 = print_all.bind(myObj , "maluda" , "mikel");
myFunc2("lampard");
