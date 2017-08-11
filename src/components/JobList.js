import React, { Component } from 'react';
import Job from './Job'

class JobList extends Component {

  render(props) {
    let jobs = this.props.jobs
    return (
      <div>
        {jobs.map(job => <Job job={job} key={job.id} />)}
      </div>
    )
  }
}

export default JobList;
