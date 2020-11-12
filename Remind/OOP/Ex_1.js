// 메서드를 정의하는 방법

Function.prototype.method = function(name , func) {
    console.log(this);
    if (!(this.prototype[name])) {
        this.prototype[name] = func;
    }
}


function Person(name) {
    this.name = name;
}

Person.method("getName" , function() {
    return this.name;
})

console.log(Person.prototype);

var man = new Person('man');
console.log(man.getName());