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
