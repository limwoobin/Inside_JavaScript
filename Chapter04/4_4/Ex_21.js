// 함수 형식에 맞춰 인자를 넘기지 않아도 함수 호출 가능
function func(arg1 , arg2) {
    console.log(arg1 , arg2);
}

func();
func(1);
func(1,2);
func(1,2,3);