import React from 'react';
import Job from './Job'

const JobList = (props) => {
  return (
    <div className={'jobList'}>
      {props.jobs.map(job =>
        <Job id={job.id}
             key={job.id}
             menuOptions={props.categories}
             isEditing={props.isEditing} />
      )}
    </div>
  )
}

export default JobList;
