function quickSort(array) {
    if (array.length === 0) {
      return [];
    } else {
      const pivotValue = array[0];
      // Sort elements into three piles
      let lesser = [];
      let equal = [];
      let greater = [];
      for (let e of array) {
        if (e < pivotValue) {
          lesser.push(e);
        } else if (e > pivotValue) {
          greater.push(e);
        } else {
          equal.push(e);
        }
      }
      return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
  }
  
  
  
  
  // test array:
  let array= [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
  // console.log(quickSort(array,0,array.length-1));
  var result = quickSort(array, 0, array.length - 1);
  