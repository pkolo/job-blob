import React, { Component } from 'react';
import Job from './Job'

class JobList extends Component {
  render() {
    return (
      <div className={'jobList'}>
        {this.props.jobs.map(job =>
          <Job job={job}
               key={job.id}
               handleDelete={this.deleteJob}
               menuOptions={this.props.categories}
               stateUpdater={this.updateJob} />
        )}
      </div>
    )
  }
}

export default JobList;
