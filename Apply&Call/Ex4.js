function exam() {
    console.log(Array.prototype.join.call(arguments));
}

exam(1 , 'string' , 'num');

var someOne = function() {
    console.log(this);
    console.log(this.length);
}


someOne.apply([1,2,3]);

var say = function(city) {
    console.log(this);
    console.log(this.name + "," + city);
}

var obj = {
    name: 'Tom',
}

say.call(obj , 'seoul');  // say 의 this 가 obj 를 참조

say.apply(obj , ['Gwangju']);

var bound = say.bind(obj);
bound('Busan');

