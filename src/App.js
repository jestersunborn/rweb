import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to RWEB (React + Webpack + Elecntron Boilerplate)</h2>
        </div>
        <p className="App-intro">
          Hello World!
        </p>
      </div>
    );
  }
}

export default App;
