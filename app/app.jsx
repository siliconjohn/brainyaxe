var React = require('react');
var ReactDOM = require('react-dom');
var FKApp = require('FKApp');
//var { Route, Router, IndexRoute, hashHistory } = require('react-router');

//require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

// not needed unless using foundation js
// require('script!foundation-sites/dist/foundation.js');
// $(document).foundation();

ReactDOM.render(
  <FKApp/>,
  document.getElementById("app")
);


require('./redx.jsx')
