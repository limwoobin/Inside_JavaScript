function A(arg) {
    console.log('this' , this);
    if (!(this instanceof A)) { // this가 A의 instance가 아니면 new 로 return
        return new A(arg);
    }

    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);