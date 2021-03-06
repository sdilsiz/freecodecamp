class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // Change code below this line
        this.setState({
            submit: event.target.value
        });
        // Change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Change code below this line */}
                    <input value={this.state.value} onChange={this.handleSubmit} />
                    {/* Change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                {/* Change code below this line */}

                {/* Change code above this line */}
            </div>
        );
    }
}
