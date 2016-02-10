import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Map, List } from 'immutable'
import NetworkWidget from './containers/NetworkWidget.jsx'
import store from './state/store/store.jsx'
require("./styles/app.scss");


const redux = store({});

// This is the location of API which provides actual Cytoscape.js data.
const SAMPLE_NETWORK_URL = 'http://chianti.ucsd.edu/~kono/ci/data/cyjs-with-style.json'

const DEF_WIDTH = '1200px'
const DEF_HEIGHT = '800px'
const DEF_BACKGROUND = '#EFEFEF'


ReactDOM.render(
  <Provider store={redux}>

    <NetworkWidget
      networkLocation={SAMPLE_NETWORK_URL}
      width={DEF_WIDTH}
      height={DEF_HEIGHT}
      background={DEF_BACKGROUND}
    />

  </Provider>,

  document.getElementById('root')
);
