function quickSort(arr,left,right) {
    // change code below this line
       let i = left, j = right;
  
        let tmp;
  
        let pivot = arr[(left + right) / 2];
  
   
  
        /* partition */
  
        while (i <= j) {
  
              while (arr[i] < pivot)
  
                    i++;
  
              while (arr[j] > pivot)
  
                    j--;
  
              if (i <= j) {
  
                    tmp = arr[i];
  
                    arr[i] = arr[j];
  
                    arr[j] = tmp;
  
                    i++;
  
                    j--;
  
              }
  
        };
  
   
  
        /* recursion */
  
        if (left < j)
  
              quickSort(arr, left, j);
  
        if (i < right)
  
              quickSort(arr, i, right);
  
  
    // change code above this line
    return array;
  }
  
  // test array:
  let array= [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
  quickSort(array,0,array.length-1);