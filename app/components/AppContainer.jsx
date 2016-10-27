var React = require('react');
import FretboardContainer from 'FretboardContainer'
import MenuContainer from 'MenuContainer';

export var AppContainer = React.createClass({

  componentDidMount: function(){
    $(document).foundation()
  },

  render: function() {

    return (
      <div>

        <br/>
        <MenuContainer/>
        <FretboardContainer/>
      </div>
    )
  }
});

module.exports = AppContainer;
