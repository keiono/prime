import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Map, List } from 'immutable'
import NetworkWidget from './containers/NetworkWidget.jsx'
import store from './state/store/store.jsx'
require("./styles/app.scss");


const redux = store({});

const SAMPLE_NETWORK_URL = 'http://52.11.24.133:3000/ndex2cyjs/ef554e33-d059-11e5-bff3-0251251672f9'
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
