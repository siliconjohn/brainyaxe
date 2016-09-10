var React = require('react')
var ReactDOM = require('react-dom')
var { Provider } = require('react-redux')
var store = require('./redux/store')

//var FKApp = require('FKApp');
import FKApp from 'FKApp';
require('style!css!sass!applicationStyles');

var newStore = store.createStore();
newStore.subscribe(() => {
  console.log('New state', newStore.getState());
});

ReactDOM.render(
  <Provider store={newStore}>
    <FKApp/>
  </Provider>,
  document.getElementById("app")
);
