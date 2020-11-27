
var called = 0;
var hash = (value)=> {
    called++;
    var hash = 0;
    for (var i = 0; i < value.length; i++) { hash += value.charCodeAt(i); }
    return hash;
};

var HashTable = function () {
    this.collection = {};
    // change code below this line

    this.add = function (key, val) {
        var theHash = hash(key);
        // var theHash = key;
        if (!this.collection.hasOwnProperty(theHash)) {
            this.collection[theHash] = {};
        }
        this.collection[theHash][key] = val;
    }

    this.remove = function (key) {
        // var theHash = key;
        var theHash = hash(key);
        var hashedObj = this.collection[theHash];
        if (hashedObj.hasOwnProperty(key)) {
            delete hashedObj[key];
        }
        if (!Object.keys(hashedObj).length) {
            delete this.collection[theHash];
        }
    }

    this.lookup = function (key) {
        var theHash = hash(key);
        // var theHash = key;
        if (this.collection.hasOwnProperty(theHash)) {
            return this.collection[theHash][key];
        }
        return null
    }
    // change code above this line
};


var hash = new HashTable();
hash.add(1, 2);
hash.add(1123123, 2);
hash.add(3, 2);
console.log(hash);
console.log(hash.collection);
// hash.remove(1);

// console.log(hash);
// hash.add(1, 2);
console.log(hash.lookup(1));