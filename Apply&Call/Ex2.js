function Product(name , price) {
    this.name = name;
    this.price = price;
}

function Food(name , price) {
    Product.call(this , name , price);
    this.category = 'food';
}

function Juice(name , price) {
    Product.apply(this , [name , price]);
    this.category = 'drink';
}


var cheese = new Food('cheese' , 30);
var orange = new Juice('orange' , 25);

console.log(cheese.name);
console.log(cheese.price);
console.log(cheese.category);

console.log('------------------------------------')

console.log(orange.name);
console.log(orange.price);
console.log(orange.category);