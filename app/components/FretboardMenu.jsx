var React = require('react');

var FretboardMenu = React.createClass({

  render: function() {

    return (
      <div className="row">
        <div className="column small-centered large-8 medium-8 small-10 gray">
          <h4>Choose Scale</h4>
          <select name="scales">
            <option value="0">Major</option>
            <option value="1">Minor</option>
          </select>
          <h4>Choose Tuning</h4>
          <select name="tunings">
            <option value="0">Major</option>
            <option value="1">Minor</option>
          </select>
        </div>
      </div>
    )
  }
});

module.exports = FretboardMenu;
