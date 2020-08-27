function selectionSort(array) {
    console.log(array);
    var sortedArray = [];
    let [min, max] = array.reduce(([prevMin, prevMax], curr) =>
        [Math.min(prevMin, curr), Math.max(prevMax, curr)], [Infinity, -Infinity]);

    for (let x in array) {
        //console.log(x);
        //console.log(array[x]);
        let [min] = array.reduce(([prevMin], curr) =>
            [Math.min(prevMin, curr)], [Infinity, -Infinity]);
        console.log("Min:", min);
        console.log("Max:", max);
        
        sortedArray.push(min);
    
        index = array.indexOf(min);
        array[index] = max + 1;
    }
    return sortedArray;
  }
  
  
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
