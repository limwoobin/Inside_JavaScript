function outerFunc() {
    var num = 40;
    return function(x) {
        num += x;
        console.log('num' , num);
    }
}


var a = outerFunc();
a(5);
a(-10);