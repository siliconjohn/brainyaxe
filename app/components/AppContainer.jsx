var React = require('react');
import FretboardContainer from 'FretboardContainer'
import MenuContainer from 'MenuContainer';
import Toolbar from 'Toolbar'
export var AppContainer = React.createClass({

  componentDidMount: function(){
    $(document).foundation()
  },

  render: function() {

    return (
      <div>
        <Toolbar/>
        <MenuContainer/>
        <FretboardContainer/>
      </div>
    )
  }
});

module.exports = AppContainer;
