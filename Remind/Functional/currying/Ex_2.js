function calculate(a , b , c , d) {
    console.log('calc' , arguments);

    return a * b + c;   
}

function curry2(func) {
    var args = Array.prototype.slice.call(arguments , 1);
    return function() {
        var arg_idx = 0;
        for (var i=0; i<args.length && arg_idx < arguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = arguments[arg_idx++];
            }
        }

        console.log('args' , args);

        return func.apply(this , args);
    }
}

var new_func = curry2(calculate , 1 , undefined , 4 , undefined);
console.log(new_func(3,2));