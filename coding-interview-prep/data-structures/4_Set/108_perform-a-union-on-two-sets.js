class Set {
    constructor() {
        // This will hold the set
        this.dictionary = {};
        this.length = 0;
    }
    // This method will check for the presence of an element and return true or false
    has(element) {
        return this.dictionary[element] !== undefined;
    }
    // This method will return all the values in the set
    values() {
        return Object.keys(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }

        return false;
    }
    // This method will remove an element from a set
    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }

        return false;
    }
    // This method will return the size of the set
    size() {
        return this.length;
    }
    // Only change code below this line
    union(newDic) {
        //console.log(newDic.values()[0]);
        var result = new Set1();
        this.values().forEach(value => {
            result.add(value);
        })
        newDic.values().forEach(value => {
            result.add(value);
        })
        return result;
    }
    // Only change code above this line
}

var setA = new Set();
setA.add('a');
setA.add('b');
setA.add('c');
setA.add('f');
var setB = new Set();
// setB.add('a');
// setB.add('b');
setB.add('c');
setB.add('d');
setB.add('a');

// setB = ['a', 'b', 'd', 'e'];

setA.union(setB);
console.log(setA.union(setB));

