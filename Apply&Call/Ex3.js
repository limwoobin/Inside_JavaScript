var person = {
    name : 'drogba'
}

var person2 = {
    name : 'maluda',
    study : function(param) {
        console.log('param' , param);
        console.log(this.name + ' Study...');
    }
}

person2.study();

person2.study.apply(person , ['Q' , 'W']);

person2.study.call(person , 'A' , 'B');

var student = person2.study.bind(person);
student();