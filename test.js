class Test {
    constructor(x , y) {
        this.x = x;
        this.y = y;
    }

    get data() {
        return this.x + this.y;
    }

    get funcData() {
        return function() {
            return this.x - this.y;
        }
    }
}

class Inher extends Test {
    constructor(x , y , z) {
        super(x,y);
        this.z = z;
    }

    get inData() {
        return this.x + this.y + this.z;
    }
}

var inh = new Inher(1,2,3);

console.log(inh.inData);
console.log(inh.data);
console.log(inh.funcData());


const Man = class Person {
    constructor(x , y) {
        this.x = x;
        this.y = y;
    }

    set setName(x) {
        console.log('x' , x);
        this.x = x;
    }

    get getName() {
        return this.x;
    }
}

const drogba = new Man();
drogba.setName('dododododo');
console.log(drogba.getName)