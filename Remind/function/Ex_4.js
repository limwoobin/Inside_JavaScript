global.test = 'This is Test';

console.log(global.test);

var say = function() {
    console.log(this.test);
}

say();