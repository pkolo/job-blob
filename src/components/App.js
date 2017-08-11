import React, { Component } from 'react';
import { checkResponse, getJson } from '../api'

import JobList from './JobList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch('/stubs/initial_data.json')
      .then(checkResponse)
      .then(getJson)
      .then(json => this.setState({jobs: json["result"]}))
      .catch(err => console.log('ERROR', err))
  }

  render() {
    return (
      <div>
        <h2>Job Blob</h2>
        <JobList />
      </div>
    );
  }
}

export default App;
