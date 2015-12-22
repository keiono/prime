import { combineReducers } from 'redux'

import graph from './graphReducer.jsx'
import styleSelector from './styleSelectorReducer'

export default combineReducers({
  graph,
  styleSelector
})
