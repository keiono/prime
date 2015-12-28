import { combineReducers } from 'redux'

import graph from './graphReducer.jsx'
import styleSelector from './styleSelectorReducer'
import tableBrowser from './tableBrowserReducer'

export default combineReducers({
  graph,
  styleSelector,
  tableBrowser
})
