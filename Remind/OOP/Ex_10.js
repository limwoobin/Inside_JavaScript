var ArrCreate = function(arg) {
    var arr = [1,2,3];
    var arr2 = [1,2,3];

    return {
        getArr: function() {
            return arr;
        },
        getArr2: function() {
            return arr2.slice();
        }
    };
}

var obj = ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());
// shallow copy

var arr2 = obj.getArr2();
arr2.push(5);
console.log(obj.getArr2());
// deep copy

