function pairwise(arr, arg) {

  console.log(arr);
  console.log(arg);
  let array=[];
 // console.log(...arguments);
  var total=0;
  for(let x in arr){
    
       
      for(let y in arr){
          if(x==y){continue;}
          if(array.indexOf(x+y) !== -1||array.indexOf(y+x) !== -1){
                    continue;}

          if(parseInt(arr[y])+parseInt(arr[x])==arg)
              {
                // console.log("toplam esit cikti y "+y+" deger "+arr[y]+" x " 
                // +x+" deger "+arr[x])
                total+=parseInt(y);
              total += parseInt(x); 

                

            // if(array.indexOf(x+y) !== -1||array.indexOf(y+x) !== -1){
            //         continue;
            //     } else{
                    // alert("Value does not exists!")
                     array.push(x+y);
                // }

                
                
              }
      }
  }
  console.log(array);
  console.log(total);
  return total;
}

// pairwise([1,4,2,3,0,5], 7);
// pairwise([1, 3, 2, 4], 4);
 pairwise([1, 1, 1], 2);
// pairwise([0, 0, 0, 0, 1, 1], 1);


