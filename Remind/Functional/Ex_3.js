// 팩토리얼

// 명령형 프로그래밍 방식
function fact(num) {
    var val = 1;
    for (var i=2; i<=num; i++) {
        val = val * i;
    }

    return val;
}

function fact2(num) {
    if (num == 0) return 1;
    else return num * fact(num - 1);
}

console.log(fact(10));
console.log(fact2(10));