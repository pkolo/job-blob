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

export function createJob(jobPayload) {
  return function (dispatch) {
    return JobAPI.createJob(jobPayload)
      .then( (responseJob) => {
        dispatch(createJobSuccess(responseJob))
        return responseJob
    }).catch(error => {
        dispatch(createJobFailure(error))
    })
  }
}

export function createJobSuccess(job) {
  return {type: "CREATE_JOB_SUCCESS", job}
}

export function createJobFailure(error) {
  throw(error.message.split(','))
}

export function updateJob(jobPayload, jobId) {
  return function (dispatch) {
    return JobAPI.updateJob(jobPayload, jobId)
      .then( (responseJob) => {
        dispatch(updateJobSuccess(responseJob))
    }).catch(error => {
        dispatch(updateJobFailure(error))
    })
  }
}

export function updateJobSuccess(job) {
  return {type: "UPDATE_JOB_SUCCESS", job}
}

export function updateJobFailure(error) {
  throw(error.message.split(','))
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
