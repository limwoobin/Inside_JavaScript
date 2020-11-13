
function reduce(arr , func , memo) {
    var len = arr.length;
    var i = 0 , result = memo;

    for (i=0; i<len; i++) {
        result = func(result , arr[i]);
    }

    return result;
}


var sum = function(x , y) {
    return x + y;
}

var multifly = function(x , y) {
    return x * y;
}

var arr = [1,2,3,4];
console.log(reduce(arr , sum , 0));
console.log(reduce(arr , multifly , 1));