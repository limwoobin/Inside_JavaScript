var ArrCreate = function(arg) {
    var arr = [1,2,3];

    return {
        getArr : function() {
            return arr;
        }
    };
}

var obj = new ArrCreate();
var arr = obj.getArr();
arr.push(5);

console.log(obj.getArr());  // 객체 참조를 반환해서 생긴 문제.