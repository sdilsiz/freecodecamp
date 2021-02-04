// function Queue() {
//     var collection = [];



//     this.enqueue = function (newItem) {
//         collection.push(newItem);
//     }

//     this.dequeue = function () {
//         return collection.shift();
//     }



//     this.size = function () { return collection.length; }

//     this.print = function () { console.log(collection); }

//     this.isEmpty = function () {
//         return collection.length === 0;
//     }

// }


// foo()    //first function call

// function foo(){
//     console.log("foo 1")
// }

// var foo=function(){
//     console.log("foo 2")
// }

// function foo(){
//     console.log("foo 3")
// }

// foo();    //second function call

// function showState(){console.log(1);}

var showState = function() {
    console.log("Idle");
  };
  
  function showState() {
    console.log("Ready");
  }   
  
  showState();            // output: Idle