import React, {Component} from 'react';
import Quote from './Quote';
import Control from './Control';

const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuoteIndex: -1
    }
    this.quotes = [];
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.quotes = data.quotes;
        this.handleClick();
      })
      .catch(err => console.log(err.message));
  }

  handleClick() {
    const newIndex = Math.floor(Math.random() * this.quotes.length);
    this.setState({
      selectedQuoteIndex: newIndex
    });
  }

  render() {
    const objQuote = this.quotes[this.state.selectedQuoteIndex];
    if (objQuote) {
      return (
        <div id="quote-box">
          <Quote quote={objQuote.quote} author={objQuote.author} />
          <Control onClick={this.handleClick} />
        </div>
      );
    }
    else {
      return (
        <div id="quote-box">
          Loading...
        </div>
      );
    }
  }
}

export default QuoteMachine;