import React, { Component } from 'react';
import SeasonDisplay from './components/SeasonDisplay';

class App extends Component {

  state = {
    lat : null,
    errorMessage : ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat : position.coords.latitude
        })
      },
      err => {
        this.setState({
          errorMessage : err.message
        })
      });
  }

  render() {
    const content = this.state.lat ? (
      <div>
        <span>Latitude : {this.state.lat}</span>
        <SeasonDisplay />
      </div>
    ) : (
      <span>Error : {this.state.errorMessage}</span>
    )

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
