var f1 = function(input) {
    var result;

    result = 1;
    return result;
}

var f2 = function(input) {
    var result;

    result = 2;
    return result;
}

var f3 = function(input) {
    var result;

    result = 3;
    return result;
}

var get_encrypted = function(func) {
    var str = 'drogba';

    return function() {
        return func.call(null , str);
    }
}

var encrypt_value = get_encrypted(f1)();
console.log(encrypt_value);
var encrypt_value = get_encrypted(f2)();
console.log(encrypt_value);
var encrypt_value = get_encrypted(f3)();
console.log(encrypt_value);