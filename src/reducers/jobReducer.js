import initialState from './initialState';

export default function jobReducer(state = initialState.jobs, action) {
  switch(action.type) {
    case "LOAD_JOBS_SUCCESS":
      return action.jobs
    default:
      return state;
  }
}
