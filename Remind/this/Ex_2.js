var obj = {
    a: 'Custom'
};

global.a = 'Global';

function whatThis() {
    return this.a;
}

console.log(whatThis());
console.log(whatThis.call(obj));
console.log(whatThis.apply(obj));
