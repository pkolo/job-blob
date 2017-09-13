import { combineReducers } from 'redux';
import jobs from './jobReducer'
import categories from './categoryReducer'

const rootReducer = combineReducers({
  jobs,
  categories
})

export default rootReducer;
