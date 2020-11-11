var vertexes = 'XX...';

function Graph() {
    this.vertexes = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function(x) {
        this.vertexes.push(x);
    }
};

var g = new Graph();
g.addVertex(5);

console.log(g.vertexes);


var obj = {
    value: 3,
    outer: function() {
        console.log('outer' , this.value);
        function inner() {
            console.log('inner' , this.value);
        };

        inner();
    }
}

console.log('obj.value' , obj.value);
obj.outer();