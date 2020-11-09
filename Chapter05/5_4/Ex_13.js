function callLater(obj , a , b) {
    return (function() {
        obj["sum"] = a + b;
    });
}

var sumObj = {
    sum: 0,
};

var func = callLater(sumObj , 3 , 5);
setTimeout(func , 500);