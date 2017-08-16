import JobAPI from '../api/jobApi'

export function loadJobs() {
  return function(dispatch) {
    return JobAPI.getAllJobs()
      .then(response => { dispatch(loadJobsSuccess(response.result)) })
      .catch(err => { throw(err) })
  }
}

export function loadJobsSuccess(jobs) {
  return {type: "LOAD_JOBS_SUCCESS", jobs}
}

export function deleteJob(job) {
  return function (dispatch) {
    return JobAPI.deleteJob(job)
      .then( () => {
        console.log(`Deleted job ${job.id}`)
        dispatch(deleteJobSuccess(job))
        return;
    }).catch(error => { throw(error) });
  };
}

export function deleteJobSuccess(job) {
  return {type: "DELETE_JOB_SUCCESS", job}
}
