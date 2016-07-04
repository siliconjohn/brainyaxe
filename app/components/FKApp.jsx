var React = require('react');
var Fretboard = require('Fretboard');
var FretboardMenu = require('FretboardMenu');

var FKApp = React.createClass({

  getInitialState: function() {
    return {}
  },

  render: function() {
    return (
      <div>
        <br/>
        <FretboardMenu/>
        <br/>
        <Fretboard/>
      </div>
    )
  }
});

module.exports = FKApp;
