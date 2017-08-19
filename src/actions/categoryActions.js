import JobAPI from '../api/jobApi'

export function loadJobs() {
  return function(dispatch) {
    return JobAPI.getAllCategories()
      .then(response => { dispatch(loadCategoriesSuccess(response.result)) })
      .catch(err => { throw(err) })
  }
}

export function loadCategoriesSuccess(categories) {
  return {type: "LOAD_CATEGORIES_SUCCESS", categories}
}
