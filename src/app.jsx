import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Map, List } from 'immutable'
import Root from './containers/Root.jsx'
import store from './state/store/store.jsx'

require("./styles/app.scss");

const redux = store({});

ReactDOM.render(
  <Provider store={redux}>
    <Root/>
  </Provider>,

  document.getElementById('root')
);
