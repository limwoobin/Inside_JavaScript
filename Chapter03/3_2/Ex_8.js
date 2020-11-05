var foo = {
    name : 'foo',
    age : 30,
    major : 'computer science'
};

var prop;
for (prop in foo) {
    console.log(prop + ":" + foo[prop]);
}