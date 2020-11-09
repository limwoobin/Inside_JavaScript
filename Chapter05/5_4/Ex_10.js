function HelloFunc() {
    this.greeting = 'hello';
}

HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var objHello = new HelloFunc();

function saySomething(obj , methodName , name) {
    return (function(greeting) {
        return obj[methodName](greeting , name);
    });
}

function newObj(obj , name) {
    obj.func = saySomething(this , "who" , name); // obj.func 에 who 함수 반환
    return obj;
}

newObj.prototype.who = function(greeting , name) {
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello , "zzoon");
obj1.call();