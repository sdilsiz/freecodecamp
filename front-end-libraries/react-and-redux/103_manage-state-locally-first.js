class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
   handleChange = handleChange.bind(this);
       handleChange() {
        this.setState(state => ({
          input: state.input.value
        }));
      };
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
  <button onClick={this.handleChange}>click</button>
  <ul>
  <li></li>
  <li></li>
  </ul>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  