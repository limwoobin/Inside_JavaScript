var fibo = function() {
    var cache = {'0': 0, '1': 1};

    var func = function(n , s) {
        console.log(s , n);
        if (typeof cache[n] === 'number') {
            result = cache[n];
        } else {
            console.log('n' , n);
            result = cache[n] = func(n-1 , 's1') + func(n-2 , 's2');
        }

        return result;
    }

    return func;
}();

console.log(fibo(10));