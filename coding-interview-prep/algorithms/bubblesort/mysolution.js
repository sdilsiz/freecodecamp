function bubbleSort(array) {
    // change code below this line
  
    for(let i in array){
      console.log(array[i]);
        for(let j in array){
              // console.log(array[j]);
               if(array[j]>array[parseInt(j)+1])
                        {
                            let swapelement=array[parseInt(j)+1];
  // console.log("islem gerekiyor =>"+array[j]+" "+array[parseInt(j)+1]);
  array[parseInt(j)+1]=array[parseInt(j)];
  array[parseInt(j)]=swapelement;
  
                        }
        }
    
  
    }
  console.log(array);
    return array;
    // change code above this line
  }
  
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  