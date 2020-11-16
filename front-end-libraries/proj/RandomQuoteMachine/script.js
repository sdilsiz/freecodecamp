

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
  '#BDB76B',
  '#CD5C5C',
  '#FFA07A',
  '#FFC0CB',
  '#FF7F50',
  '#FFFACD',
  '#BDB76B',
  '#EE82EE',
  '#9400D3',
  '#7CFC00',
  '#DAF7A6',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#900C3F',
  '#581845',
  '#E6E6FA'
];


class QuoteMachine extends React.Component {
  static displayName = QuoteMachine.name;



  constructor(props) {
    super(props);
    this.state = { currentCount: 0, currenttext: "", currentauthor: "", index: 0, quotesData: [] };

    this.newquote = this.newquote.bind(this);
    this.fillDataSource = this.fillDataSource.bind(this);

  }

  componentDidMount() {
    this.fillDataSource().then(() => this.newquote());
  }

  async fillDataSource() {
    let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quotesData: data });
  }

  newquote() {
    let colorIndex = Math.floor(Math.random() * colors.length);

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = colors[colorIndex];

    this.setState({
      currenttext: this.state.quotesData.quotes[Math.floor(Math.random() * this.state.quotesData.quotes.length)].quote,
      currentauthor: this.state.quotesData.quotes[Math.floor(Math.random() * this.state.quotesData.quotes.length)].author
    });

    //console.log("yeni author " + this.state.currentauthor);
    //console.log("yeni text " + this.state.currenttext);

  }


  render() {
    return (<div id="quote-box">


      <div id="text">
        <div id="quote-text">{this.state.currenttext}</div>
      </div>
      <div id="author">

        <div id="quote-author">
          {this.state.currentauthor}
        </div>
      </div>
      <div className="buttons">
        <button id="new-quote" onClick={this.newquote}>New Quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
      </div>

    </div>);
  }

}



React.render(<QuoteMachine />, document.getElementById('app'));
