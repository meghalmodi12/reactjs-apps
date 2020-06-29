import React, {Component} from 'react';

class Quote extends Component {
  render() {
    return (
      <div className="content-box">
        <div id="text" className="quote-box">{this.props.quote}</div>
        <div id="author" className="author-box">{this.props.author}</div>
      </div>
    );
  }
}

export default Quote;