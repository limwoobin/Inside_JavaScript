// 리턴 값으로 활용

var foo = function() {
    return function() {
        console.log('this function is the return value');
    };
};

var bar = foo();
bar();