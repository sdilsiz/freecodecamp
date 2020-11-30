var Map = function () {
    this.collection = {};
    // Only change code below this line



    this.add = function (key, value) {
        this.collection[key] = value;
    };


    this.remove = function (key) {
        delete this.collection[key];
    };
    this.get = function (key) {
        return this.collection[key];
    };
    this.has = function (key) {
        return this.collection[key] !== undefined;
    };
    this.values = function () {
        return Object.values(this.collection);
    };
    this.clear = function () {
        this.collection = {};
    };
    this.size = function () {
        return Object.keys(this.collection).length;
    };

    // Only change code above this line
};


var map = new Map();

map.add(1, 2);
map.add(1, 32);
console.log(map.collection);
console.log(map.values());