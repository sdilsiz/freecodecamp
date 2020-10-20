const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
  const mapDispatchToProps =(dispatch )=>{
    // return {dispatch(addMessage(submitNewMessage));}
      return {
          submitNewMessage: (message)=>{
              dispatch(addMessage(message))
          }
      }
  }
   