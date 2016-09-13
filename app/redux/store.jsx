var redux = require('redux')
var actions = require('./actions')
var reducers = require('./reducers')
var { initialState } = require('../initialState')

export var createStore = () => {

  var store = redux.createStore(reducers.appReducers, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ))

  return store
}
