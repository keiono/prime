import { combineReducers } from 'redux'
import graph from './graphReducer.jsx'
import style from './styleReducer.jsx'


export default combineReducers({

  graph,
  style

})
