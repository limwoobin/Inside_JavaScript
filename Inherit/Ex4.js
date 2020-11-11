var value = 100;

var obj = {
    value: 50,
    outer: function() {
        console.log('outer' , this.value);
    
        inner = function() {
            console.log('inner' , this.value);
        }
    
        inner();
    }
}


obj.outer();