function permAlone(string) {
  

////findPermutations ornek alindi.
    let findPermutations = (string) => {
      if (!string || typeof string !== "string"){
        return "Please enter a string"
      } else if (string.length < 2 ){
        return string
      }
    
      let permutationsArray = [] 
       
      for (let i = 0; i < string.length; i++){
        let char = string[i]
    
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    
        for (let permutation of findPermutations(remainingChars)){
          permutationsArray.push(char + permutation) }
      }
      return permutationsArray
    }
    
    
    let permutationsArray=findPermutations(string);
    let errorWordsCount=0;
     for(let x in permutationsArray)
     {
        //  console.log(permutationsArray[x]+" "+ permutationsArray[x].length);
         
          for (var index in permutationsArray[x]){
                let newindex=parseInt(index)+1;
              
                if(newindex==permutationsArray[x].length){break;}
         
                   let next=  permutationsArray[x][newindex];
                  // console.log("current "+permutationsArray[x][index]);
                  // console.log("next "+next);
    
                if(permutationsArray[x][index]===next)
                  {
                      errorWordsCount++;
                      break;
                  }
          }
          
     }
    
    
    console.log(permutationsArray+" "+permutationsArray.length+" "+errorWordsCount);
    let result=permutationsArray.length-errorWordsCount;
    if(result<0) return 0;
       return permutationsArray.length-errorWordsCount;
    }
    
    console.log(permAlone('aaabb'));
    
    
    
      
       
      