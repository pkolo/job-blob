import initialState from './initialState';

export default function jobReducer(state = initialState.jobs, action) {
  switch(action.type) {
    case "LOAD_JOBS_SUCCESS":
      return action.jobs
    case "CREATE_JOB_SUCCESS":
      let newStateCreatedJob = [
        ...state.filter(job => job.id !== action.job.id),
        JSON.parse(JSON.stringify(action.job))
      ]
      return newStateCreatedJob
    case "UPDATE_JOB_SUCCESS":
      let newStateUpdatedJob = [
        ...state.filter(job => job.id !== action.job.id),
        JSON.parse(JSON.stringify(action.job))
      ]
      return newStateUpdatedJob
    case "DELETE_JOB_SUCCESS":
      const newState = Object.assign([], state);
      const indexOfJobToDelete = state.findIndex(job => {
        return job.id === action.job.id
      })
      newState.splice(indexOfJobToDelete, 1)
      return newState;
    default:
      return state;
  }
}
