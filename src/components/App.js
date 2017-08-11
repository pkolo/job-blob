import React, { Component } from 'react';

import Job from './Job'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch('/stubs/initial_data.json')
      .then(this.checkResponse)
      .then(this.getJson)
      .then(json => this.setState({jobs: json["result"]}))
      .catch(err => console.log('ERROR', err))
  }

  checkResponse(response) {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(
        new Error(response.statusText)
      )
    }
  }

  getJson(response) {
    return response.json()
  }

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
