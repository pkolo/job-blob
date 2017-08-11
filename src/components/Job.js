import React, { Component } from 'react';

import { APIRoot, checkResponse, getJson } from '../api'

const jobStyle = {
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid black'
};

class Job extends Component {
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
    return (
      <div style={jobStyle}>
        <h3>{job.title}</h3>
        <p>{job.details}</p>
        <ul>
          <li>Category: {job.category.name}</li>
          <li>Location: {job.location.city}, {job.location.state}</li>
          <li>Posted on {job.date_posted}</li>
        </ul>
        <button>Update</button>
        <button onClick={this.handleDeleteButton.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default Job;
