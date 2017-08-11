import React, { Component } from 'react';
import uniqBy from 'lodash/uniqBy'

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

  getCategories() {
    let categories = this.state.jobs.map(job => job.category)
    return uniqBy(categories, 'id')
  }

  getLocations() {
    let locations = this.state.jobs.map(job => job.location)
    return uniqBy(locations, 'id')
  }

  render() {
    return (
      <div style={appStyle}>
        <h2>Job Blob</h2>
        <FilterBar categories={this.getCategories()} locations={this.getLocations()} />
        <JobList jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default App;
