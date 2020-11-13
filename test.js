class Parent {
    constructor(name) {
        this.name = name;
    }

    get getName() {
        return function() {
            return this.name;
        }
    }
}

const parent = new Parent('xx');
console.log(parent.getName());

class Child extends Parent {
    constructor(name) {
        super(name);
        this.name = name;
    }
}

const child = new Child('yy');
console.log(child.getName());