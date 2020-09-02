function mergeSort(unsortedArray) {


    // Merge the two arrays: left and right
    function merge (left, right) {
      let resultArray = [], leftIndex = 0, rightIndex = 0;
    
      // We will concatenate values into the resultArray in order
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++; // move left array cursor
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++; // move right array cursor
        }
      }
    
      // We need to concat here because there will be one element remaining
      // from either left OR the right
      return resultArray
              .concat(left.slice(leftIndex))
              .concat(right.slice(rightIndex));
    }
    
      // change code below this line
    if (unsortedArray.length <= 1) {
        return unsortedArray;
      }
      // In order to divide the array in half, we need to figure out the middle
      const middle = Math.floor(unsortedArray.length / 2);
    
      // This is where we will be dividing the array into left and right
      const left = unsortedArray.slice(0, middle);
      const right = unsortedArray.slice(middle);
    
      // Using recursion to combine the left and right
      return merge(
        mergeSort(left), mergeSort(right)
      );
      // change code above this line
      return array;
    }
    
    mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
    