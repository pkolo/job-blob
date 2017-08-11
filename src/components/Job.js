import React, { Component } from 'react';

const jobStyle = {
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid black'
};

class Job extends Component {

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
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Job;
