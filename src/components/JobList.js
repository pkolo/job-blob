import React, { Component } from 'react';

class JobList extends Component {

  render(props) {
    let jobs = this.props.jobs
    return (
      <div>
        {jobs.map(job => <p>{job["title"]}</p>)}
      </div>
    )
  }
}

export default JobList;
