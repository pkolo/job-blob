import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'

import uniqBy from 'lodash/uniqBy'
import sortBy from 'lodash/sortBy'

import { APIRoot, checkResponse, getJson } from '../modules/api'

import SideBar from './SideBar'
import JobForm from './JobForm'
import Job from './Job'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      categories: []
    }

    this.addJob = this.addJob.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.updateJob = this.updateJob.bind(this)
    this.setCategories = this.setCategories.bind(this)
  }

  componentWillMount() {
    fetch(APIRoot("jobs"), {mode: 'cors'})
      .then(getJson)
      .then(checkResponse)
      .then(json => this.setState({jobs: sortBy(json.result, 'id').reverse()}))
      .then(this.setCategories)
      .catch(err => console.log('ERROR', err))
  }

  setCategories() {
    let categories = this.state.jobs.map(job => job.category)
    this.setState({ categories: uniqBy(categories, 'id') })
  }

  getLocations() {
    let locations = this.state.jobs.map(job => job.location)
    return uniqBy(locations, 'id')
  }

  addJob(job) {
    let newJobs = this.state.jobs
    newJobs.push(job)

    this.setState({ jobs: sortBy(newJobs, 'id').reverse() })
  }

  deleteJob(jobToDelete) {
    let newJobs = this.state.jobs.filter(job => job !== jobToDelete )
    this.setState({
      jobs: newJobs
    })
  }

  updateJob(updatedJob) {
    let jobs = this.state.jobs
    let newJobs = jobs.filter(job => job.id !== updatedJob.id)
    newJobs.push(updatedJob)

    this.setState({
      jobs: sortBy(newJobs, 'id').reverse()
    })
  }

  render() {
    let categories = this.state.categories
    let jobs = this.state.jobs
    return (
      <div className={css(styles.appContainer)}>
        <h2>Job Blob</h2>
        <div className={css(styles.sidebarSection)} >
          <SideBar categories={categories} locations={this.getLocations()} />
        </div>
        <div className={css(styles.mainSection)}>
          <JobForm categoryOptions={categories.map(c => c.name)} stateUpdater={this.addJob}/>
          {jobs.map(job => <Job job={job} key={job.id} handleDelete={this.deleteJob} categoryOptions={categories.map(c => c.name)} stateUpdater={this.updateJob} />)}
        </div>
      </div>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    width: '1000px',
    marginLeft: '20px',
    fontFamily: 'sans-serif'
  },
  sidebarSection: {
    width: '200px',
    float: 'left',
    padding: '15px',
    border: '1px solid black'
  },
  mainSection: {
    width: '750px',
    float: 'right'
  }
})
