function countSeconds(howMany) {
    for (var i=1; i<=howMany; i++) {
        console.log(i);
        setTimeout(function() {
            console.log(i);
        } , i * 1000);
    }
};

countSeconds(3);


function countSeconds2(howMany) {
    for (var i=1; i<=howMany; i++) {
        (function(currentI) {
            setTimeout(function() {
                console.log(currentI);
            } , currentI * 1000);
        })(i);
    }
};

// countSeconds2(3);