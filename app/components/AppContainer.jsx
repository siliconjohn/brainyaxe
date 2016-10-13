var React = require('react');
import FretboardContainer from 'FretboardContainer'
import MenuContainer from 'MenuContainer';

export var AppContainer = React.createClass({

  render: function() {

    return (
      <div>
        <br/>
        <MenuContainer/>
        <br/>
        <FretboardContainer/>
      </div>
    )
  }
});

module.exports = AppContainer;
