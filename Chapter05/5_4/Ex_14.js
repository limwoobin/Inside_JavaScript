function outerFunc(argNum) {
    var num = argNum;
    return function(x) {
        num += x;
        console.log('num: ' + num);
    }
}

var exam = outerFunc(40);
exam(5);
exam(-10);

// 호출시마다 자유변수 num 의 값이 변함.