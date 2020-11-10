function wrap(object , method , wrapper) {
    var fn = object[method];
    return object[method] = function() {
        console.log('A' , Array.prototype.slice.call(arguments));
        console.log('B' , [fn].concat(
            Array.prototype.slice.call(arguments)
        ));
        console.log('C' , fn);
        return wrapper.apply(this , [fn].concat(
            Array.prototype.slice.call(arguments)
        ));
    };
}

Function.prototype.original = function(value) {
    this.value = value;
    console.log('value : ' + this.value);
}

var mywrap = wrap(Function.prototype , "original" , function(orig_func , value) {
    this.value = 20;
    orig_func(value);
    console.log("wrapper value : " + this.value);
});

var obj = new mywrap('drogba');
