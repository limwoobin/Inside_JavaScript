function Outer() {
    var x = 10; // 자유변수
    
    var Inner = function(y) {
        x += y;
        return x;
    }

    return Inner;
}

var func = Outer();
console.log(func(1));
console.log(func(15));