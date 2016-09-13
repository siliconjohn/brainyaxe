var React = require('react');
import FretboardSVG from 'FretboardSVG'
import FretboardMenu from 'FretboardMenu';

export var FKApp = React.createClass({

  render: function() {

    return (
      <div>
        <br/>
        <FretboardMenu/>
        <br/>
        <FretboardSVG/>
      </div>
    )
  }
});

module.exports = FKApp;
