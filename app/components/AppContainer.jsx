var React = require('react');
import FretboardContainer from 'FretboardContainer'
import MenuContainer from 'MenuContainer';
import Toolbar from 'Toolbar'
export var AppContainer = React.createClass({

  componentDidMount: function(){
    $(document).foundation()
  },
  //<MenuContainer/>
  render: function() {

    return (
      <div>

         <Toolbar/>

        <FretboardContainer/>
      </div>
    )
  }
});

module.exports = AppContainer;
