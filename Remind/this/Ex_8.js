function Shape(x , y) {
    console.log('cons' , x , y);
    this.x = x;
    this.y = y;   
}

Shape.prototype.size = function() {
    console.log(this.x + "," + this.y);
    return this.x * this.y;
}


function Rectangle(x , y) {
    Shape.call(this , x , y);
}


Rectangle.prototype = Shape.prototype;
Rectangle.prototype.constructor = Rectangle;

var rectangle = new Rectangle(2,2);
console.log(rectangle.size());