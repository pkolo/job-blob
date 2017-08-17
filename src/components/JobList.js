import React from 'react';
import Job from './Job'

const JobList = (props) => {
  return (
    <div className={'jobList'}>
      {props.jobs.map(job =>
        <Job id={job.id}
             key={job.id}
             handleDelete={this.deleteJob}
             menuOptions={props.categories}
             stateUpdater={this.updateJob} />
      )}
    </div>
  )
}

export default JobList;
