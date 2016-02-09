import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/rootReducer.jsx';
import DevTools from '../../containers/DevTools.jsx';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {

  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer.jsx', () =>
      store.replaceReducer(require('../reducers/rootReducer.jsx'))
    )
  }

  return store
}
