import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action) {
  switch(action.type) {
    case "LOAD_CATEGORIES_SUCCESS":
      return action.categories
    default:
      return state
    }
  }
