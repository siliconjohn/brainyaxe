var React = require('react')

var Toolbar = React.createClass({

  render: function() {

    return (
      <div className="title-bar">
        <div className="title-bar-left">
          <h5>Fretboard Kit</h5>
        </div>
        <div className="title-bar-right">
          <button className="menu-icon" type="button"></button>
        </div>
      </div>
    )
  }
});

module.exports = Toolbar
