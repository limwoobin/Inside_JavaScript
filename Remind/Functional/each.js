function each(obj , fn , args) {
    if (obj.length == undefined) {
        for (var i in obj) {
            fn.apply(obj[i] , args || [i , obj[i]]);
        }
    } else {
        for (var i=0; i<obj.length; i++) {
            fn.apply(obj[i] , args || [i , obj[i]]);
        }
    }

    return obj;
}

each([1,2,3] , function(idx , num) {
    console.log(idx + ": " + num);
});

var drogba = {
    name: 'drogba',
    age: 30,
    sex: 'male'
};

each(drogba , function(field , value) {
    console.log(field + ": " + value);
})