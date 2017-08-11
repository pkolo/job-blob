import React, { Component } from 'react';

import Job from './Job'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React</h2>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Job />
      </div>
    );
  }
}

export default App;
