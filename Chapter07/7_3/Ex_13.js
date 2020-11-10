function each(obj , fn , args) {
    console.log(obj);
    console.log(fn.toString());
    console.log(args);

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
};

each([1,2,3] , function(idx , num) {
    console.log(idx + " : " + num);
});

var drogba = {
    name: 'drogba',
    age: 30,
    sex: "Male"
};

each(drogba , function(idx , value) {
    console.log(idx + ": " + value);
});