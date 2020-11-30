function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.push=function(val){
       return collection.push(val);
    }
    this.pop=function(){     
      return collection.pop();
      // return x;
    }
    this.peek=function(){
      return collection[collection.length - 1];
    } 
  
     this.isEmpty=function(){
      if(collection.length==0) return true;
    }
    this.clear=function(){
      collection.length=0;
    }
    // Only change code above this line
  }
  
  
  