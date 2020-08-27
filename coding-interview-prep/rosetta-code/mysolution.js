function getFinalOpenedDoors(numDoors) {
    // Good luck!
    console.log(numDoors);
    var doorArray=[];
  
    for(let i=0;i<numDoors;i++){
      doorArray.push({"number":i,"status":1});
    }
    // console.log(doorArray);
  
  
  for(let i=2;i<numDoors;i++){
      // doorArray.push([i,1]);
      toggle(i);
      // console.log("step")
    }
  
  
    
    function toggle(toogleSpace){
        
        for(let i=0;i<=numDoors;i+=toogleSpace){
          console.log(doorArray[i]);
  
          if(doorArray[i][1]==1){
             doorArray[i][1]=parseInt(0);
              doorArray.push([i,0],i);
            //  console.log("if");
          }else{
              // doorArray.i.'1'=parseInt(1);
            //  doorArray.push([i,1],i);
            //  console.log("else");
          }
           console.log(doorArray[i]+"-----"+doorArray[i][1]);
      }
  
    };
  }
  
   getFinalOpenedDoors(10)
  
  