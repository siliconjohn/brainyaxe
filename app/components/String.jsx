var React = require('react');

var String = React.createClass({

  render:function () {
    var {midiNote, note} = this.props;

    return (
      <div>{note} - {midiNote}</div>
    )
  }
});

module.exports = String;
