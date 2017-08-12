import React, { Component } from 'react';

import { APIRoot, checkResponse, getJson } from '../api'

import JobForm from './JobForm'

const jobStyle = {
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid black'
};

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'show'
    }

    this.handleDeleteButton = this.handleDeleteButton.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  toggleEditMode(e) {
    this.state.mode === 'show' ? this.setState({ mode: 'edit' }) : this.setState({ mode: 'show' })
  }

  handleDeleteButton(e) {
    e.preventDefault()

    fetch(APIRoot(`jobs/${this.props.job.id}`),
    {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(getJson)
    .then(checkResponse)
    .then(this.props.handleDelete(this.props.job))
    .catch(err => console.log('ERROR', err))
  }

  render(props) {
    let job = this.props.job;
    if (this.state.mode === 'edit') {
      return (
        <JobForm categoryOptions={this.props.categoryOptions} mode='edit' job={job} toggleParentMode={this.toggleEditMode} stateUpdater={this.props.stateUpdater} />
      )
    } else {
      return (
        <div style={jobStyle}>
          <h3>{job.title}</h3>
          <p>{job.details}</p>
          <ul>
            <li>Category: {job.category.name}</li>
            <li>Location: {job.location.city}, {job.location.state}</li>
            <li>Posted on {job.date_posted}</li>
          </ul>
          <button onClick={this.toggleEditMode}>Update</button>
          <button onClick={this.handleDeleteButton}>Delete</button>
        </div>
      )
    }
  }
}

export default Job;
