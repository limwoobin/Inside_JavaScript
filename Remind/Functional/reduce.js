Array.prototype.reduce = function(callback , memo) {
    var obj = this;
    console.log('this' , this);
    var value , accumulated_value = 0;

    for (var i=0; i<obj.length; i++) {
        value = obj[i];
        accumulated_value = callback.call(null , accumulated_value , value);
        console.log('accu' , accumulated_value);
    }

    return accumulated_value;
}

var arr = [1,2,3];
var accumulated_value = arr.reduce(function(a , b) {
    return a + b * b;
});

console.log(accumulated_value);
