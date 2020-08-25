function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
 
var results = [];
 
 

for(let x in arr1)
{
    let item;
    item=arr1[x];
    //  console.log(item);
     var a2=arr2.filter(s=>s[1]==item[1]);
     if (!(a2 == null || a2 == undefined||a2==""))
      {
          item[0]=parseInt(item[0])+parseInt(a2[0]);
      }
    results.push(item);
}

for(let x in arr2)
{
    let item;
    item=arr2[x];
     var a2=arr1.filter(s=>s[1]==item[1]);
     if ((a2 == null || a2 == undefined||a2==""))
      {
        results.push(item);
      }
    
}

results.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });


    return results;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// console.log(updateInventory(curInv, newInv));
 console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
 
 
//  [
//      [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
//      ], 
//  [
//      [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
//      ]

// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]