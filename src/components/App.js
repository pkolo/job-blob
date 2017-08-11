import React, { Component } from 'react';
import { checkResponse, getJson } from '../api'

import FilterBar from './FilterBar'
import JobList from './JobList'

const appStyle = {
  width: '1000px',
  marginLeft: '20px'
}

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
      .then(json => this.setState({jobs: json.result}))
      .catch(err => console.log('ERROR', err))
  }

  render() {
    return (
      <div style={appStyle}>
        <h2>Job Blob</h2>
        <FilterBar />
        <JobList jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default App;
