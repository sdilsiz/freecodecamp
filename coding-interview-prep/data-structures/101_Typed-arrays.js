
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]


// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]

i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]


var complexArr = [1, 5, "2", "Word", {"name": "James"}];
console.log(complexArr);
var buffer=new ArrayBuffer(64);
var i32View=new Int32Array(buffer);
console.log(i32View);

