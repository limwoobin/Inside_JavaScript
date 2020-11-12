function Outer() {
    console.log('outer' , this);

    function Inner() {
        console.log('inner' , this);
    }

    Inner();
}


var obj = {
    a : 1,
    b : 2
};

var otherObj = {
    name: 'ohter',
    style: 'object'
};

var bindObj = {
    style: 'bind'
}

Outer();    // this 가 전역을 가리킴
Outer.call(obj);    // this가 obj에 바인딩되어 obj 를 가리킴
Outer.apply(otherObj);

var bind = Outer.bind(bindObj);
bind();   // bindObj 객체에 바인딩되어 this 가 bindObj 가리킴

// but 내부 함수는(Inner) 자바스크립트에서 [내부 함수 호출 패턴] 을 정의해 놓지 않아
// 함수 호출로 취급된다. 결국 내부함수의 this는 전역을 가리키게 된다.