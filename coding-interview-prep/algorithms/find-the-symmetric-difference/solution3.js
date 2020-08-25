function sym() {
  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  var summary = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  var unique = summary.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  return unique;
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);
console.log(sym([1, 2, 3], [5, 2, 1, 4]));