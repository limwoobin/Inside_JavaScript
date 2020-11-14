function calculate(a , b , c) {
    return a * b + c;
}

function curry(func) {
    var args = Array.prototype.slice.call(arguments , 1);

    return function() {
        return func.apply(this , args.concat(Array.prototype.slice.call(arguments)));
    }
}

var new_func1 = curry(calculate , 1);
console.log(new_func1(2 , 3));

console.log(curry(calculate , 5,4)(4));