function Stack() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function (x) {
        collection.push(x);
    }
    this.pop = function (x) {
        return collection.pop();

    }
    this.peek = function (x) {
        //  var last= myArray.item(-1);
        //  collection.shift();
        return collection.shift();;
    }

    this.isEmpty = function (x) {
        // if(collection.isEmpty()) return true; else return false;
        //  return collection.isEmpty;
        return collection.length === 0;

    }
    this.clear = function (x) {
        // delete collection[1];
        // return collection=[];
        return collection.length = 0;
        // collection.delete();
    }


    // Only change code above this line
}


