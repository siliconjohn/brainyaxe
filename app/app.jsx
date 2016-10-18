var React = require('react')
var ReactDOM = require('react-dom')
var { Provider } = require('react-redux')
var store = require('./redux/store')

//var AppContainer = require('AppContainer');
import AppContainer from 'AppContainer';
require('style!css!sass!applicationStyles');

var newStore = store.createStore();
 
ReactDOM.render(
  <Provider store={newStore}>
    <AppContainer/>
  </Provider>,
  document.getElementById("app")
);
