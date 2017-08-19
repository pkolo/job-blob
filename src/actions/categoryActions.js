import JobAPI from '../api/jobApi'

export function loadCategories() {
  return function(dispatch) {
    return JobAPI.getAllCategories()
      .then(response => { dispatch(loadCategoriesSuccess(response)) })
      .catch(err => { throw(err) })
  }
}

export function loadCategoriesSuccess(categories) {
  return {type: "LOAD_CATEGORIES_SUCCESS", categories}
}
