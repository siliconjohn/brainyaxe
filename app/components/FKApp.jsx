var React = require('react');
var Fretboard = require('Fretboard');
var FretboardMenu = require('FretboardMenu');

var FKApp = React.createClass({

  getInitialState: () => {
    return {}
  },

  render: () => {
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
