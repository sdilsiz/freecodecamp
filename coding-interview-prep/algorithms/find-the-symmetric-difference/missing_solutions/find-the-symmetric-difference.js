
function sym(...args) {
  // console.log(args);
  // console.log(args.length);
  let x =[];
  for (var i = 0; i < args.length; i++) {
     console.log(args[i].length);
    //  console.log(args[i]);
     for(var j = 0; j < args.length; j++){
        
       if(args[i]==args[j]) {continue;}

        for(var k = 0; k < args[i].length; k++){

            if(args[j].includes(args[i][k])){continue;}
            if(x.includes(args[i][k])){continue;}
            x.push(args[i][k]);
        }
     }
       
  }

  // console.log(x);
  return x;
}



// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
