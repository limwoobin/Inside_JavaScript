function countSeconds(howMany) {
    for (var i=1; i<=howMany; i++) {
        setTimeout(function() {
            console.log(i);
        } , i * 1000);
    }
}

// countSeconds(5);

function countSeconds2(howMany) {
    for (var i=1; i<=howMany; i++) {
        (function(currentI) {
            setTimeout(function() {
                console.log(currentI);
            } , currentI * 1000);
        })(i);
    }
}

// countSeconds2(5);


function countSecond3(howMany) {
    for (let i=1; i<=howMany; i++) {
        setTimeout(function() {
            console.log(i);
        } , i * 1000);
    }
}

countSecond3(5);