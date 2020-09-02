function insertionSort(array) {
    // change code below this line
     
    let n = array.length; 
    for (let i = 1; i < n; ++i) { 
              let key = array[i]; 
              let j = i - 1; 
    
              // Move elements of arr[0..i-1], 
              // that are greater than key, 
              // to one position ahead of 
              // their current position 
              while (j >= 0 && array[j] > key) { 
                  array[j + 1] = array[j]; 
                  j = j - 1; 
              } 
              array[j + 1] = key; 
          } 
    return array;
  
    // change code above this line
  }
  //, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92
  let array = [1, 4, 2, 8];
  insertionSort(array);
  console.log(array);
  