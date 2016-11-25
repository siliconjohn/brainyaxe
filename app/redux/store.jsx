var redux = require('redux')
var actions = require('actions')
var reducers = require('reducers')
var { logger } = require('loggerMiddleware')

export var createStore = ( initialState ) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose

  var store = redux.createStore( reducers.appReducers, initialState, composeEnhancers(
                                 redux.applyMiddleware( logger )))

  return store
}
