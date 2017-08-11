import React, { Component } from 'react';
import uniqBy from 'lodash/uniqBy'

import { APIRoot, checkResponse, getJson } from '../api'

import SideBar from './SideBar'
import JobForm from './JobForm'
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
    fetch(APIRoot("jobs"), {mode: 'cors'})
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
    let categories = this.getCategories()
    return (
      <div style={appStyle}>
        <h2>Job Blob</h2>
        <SideBar categories={categories} locations={this.getLocations()} />
        <JobForm categoryOptions={categories.map(c => c.name)}/>
        <JobList jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default App;
