//#region tutorial
function Tutorial() {
    const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
    console.log(set1);
    // output: {1, 2, 3, 5, 0}
    console.log(set1.has(1));
    // output: true
    console.log(set1.has(6));
    // output: false
}

//#endregion

class Set {
    constructor() {
        // Dictionary will hold the items of our set
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

    // Only change code below this line
    add(element) {
        if (this.dictionary[element] !== undefined) return false;
        else {
            this.dictionary[element] = element;
            return true;
        }
    }
    remove(element) {
        if (this.dictionary[element] !== undefined) {
            delete this.dictionary[element];
        }
    }

    size() {
        // Object.keys(this.dictionary).length;
        return Object.keys(this.dictionary).length;
    }

    // Only change code above this line
}

const set1 = new Set();
console.log(set1.dictionary);
// output: {1, 2, 3, 5, 0}
set1.add("1");
console.log(set1.has(1));
console.log(set1.dictionary);
console.log("values");
console.log(set1.values());
// output: true
console.log(set1.size());
// output: false
