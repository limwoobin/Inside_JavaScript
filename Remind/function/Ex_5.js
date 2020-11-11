function Person(name) {
    this.name = name;
}

var man = new Person('man');

console.log(man);
console.log(man.name)


// new 연산자를 빼고 호출시

var woman = Person('woman');
console.log(name);  // 전역으로 this가 바인딩됨.