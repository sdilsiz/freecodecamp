function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  // convert current inventory (arr1) to an one-dimensional array
  const inventory = Array.prototype.concat.apply([], arr1);

  // loop through new delivery (arr2)
  for (let i = 0; i < arr2.length; i++) {
    // extract item properties for easy reference
    const item = arr2[i][1];
    const quantity = arr2[i][0];

    // check if item already exists in inventory
    const position = inventory.indexOf(item);

    // exsisting item: update quantity
    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
      continue;
    }

    // alien item: add to inventory
    arr1.push([quantity, item]);
  }

  // sort inventory in alphabetical order
  arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);