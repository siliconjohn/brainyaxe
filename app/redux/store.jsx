var redux = require('redux');
var actions = require('./actions');
var reducers = require('./reducers');
var { initialState } = require('../initialState')


var store = redux.createStore(reducers.appReducers, initialState, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

// test change tuning
store.dispatch(actions.changeTuning("basstuning1"))

store.dispatch(actions.changeScale("scale7"))

module.exports.gg = function() {
  return store.getState();
}
