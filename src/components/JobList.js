import React, { Component } from 'react';
import Job from './Job'

const jobListStyle = {
  width: '600px',
  float: 'right'
}

class JobList extends Component {

  render(props) {
    let jobs = this.props.jobs
    return (
      <div style={jobListStyle}>
        {jobs.map(job => <Job job={job} key={job.id} />)}
      </div>
    )
  }
}

export default JobList;
