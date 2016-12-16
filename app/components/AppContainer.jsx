var React = require('react');
import FretboardContainer from 'FretboardContainer'
import Toolbar from 'Toolbar'

export var AppContainer = React.createClass({

  render: function() {

    return (
      <div>
        <Toolbar/>
        {this.props.children}
        <FretboardContainer/>
      </div>
    )
  }
});

module.exports = AppContainer;
