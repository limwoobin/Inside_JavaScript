// 상속을 위한 코드
function create_object(o) {
    function F() {}
    F.prototype = o;
    // F = o;
    return new F();
}




function Parent() {
    this.getName = function() {
        return 'woobeen';
    }
}

Parent.prototype.name = 'parent';

var a = create_object(Parent);  // Parent 를 부모로 삼는 자식 객체를 a 에 반환.
console.log(a.name);