import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store/store.jsx'

export default class Cyto {

  constructor(model = {}) {
    this.store = store(model)
  }

  render(widget, target) {
    ReactDOM.render(
      React.createElement(Provider, {store: this.store}, React.createElement(widget)),
      target
    )
  }

  state() {
    return this.store.getState()
  }

  subscribe(handler) {
    return this.store.subscribe(handler)
  }

  publish(action) {
    return this.store.dispatch(action)
  }

}
