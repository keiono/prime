import { combineReducers } from 'redux'

import graph from './graphReducer.jsx'
import tableBrowser from './tableBrowserReducer.jsx'
//import styleSelector from './styleSelectorReducer.jsx'

export default combineReducers({
  graph,
  //styleSelector,
  tableBrowser
})
