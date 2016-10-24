var redux = require('redux')
var actions = require('./actions')
var reducers = require('./reducers')

export var createStore = ( initialState ) => {

  var store = redux.createStore(reducers.appReducers, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ))

  return store
}
