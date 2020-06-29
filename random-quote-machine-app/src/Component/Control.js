import React, {Component} from 'react';

class Control extends Component {
  render() {
    const btnNewQuoteStyle = {
      "float": "right"
    };
    const aTweetQuoteStyle = {
      "float": "left"
    };

    return (
      <div id="controls">
        <a 
          id="tweet-quote" 
          style={aTweetQuoteStyle} 
          href="twitter.com/intent/tweet">
          Tweet Quote
        </a>
        <button 
          id="new-quote" 
          style={btnNewQuoteStyle} 
          onClick={this.props.onClick}>
          New Quote
        </button>
      </div>
    );
  }
}

export default Control;