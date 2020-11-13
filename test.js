function Test(x , y) {
    this.x = x;
    this.y = y;

    this.toString = function() {
        return this.x + ',' + this.y;
    }
}

var a = new Test(1,3);
console.log(a.toString());
