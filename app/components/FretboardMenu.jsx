var React = require('react');

var FretboardMenu = React.createClass({

  render: function() {
    var {scales,tunings} = this.props;

    var renderScales = () => {
      return scales.map((scale) => {
        return (
          <option key={scale.key}>{scale.name}</option>
        )
      })
    };

    var renderTunings = () => {
      return tunings.map((tuning) => {
        return (
          <option key={tuning.key}>{tuning.name} - {tuning.notes}</option>
        )
      })
    };

    return (
      <div className="row">
        <div className="column small-centered large-8 medium-8 small-10 gray">
          <h4>Choose Scale</h4>
          <select name="scales">
            {renderScales()}
          </select>
          <h4>Choose Tuning</h4>
          <select name="tunings">
            {renderTunings()}
          </select>
        </div>
      </div>
    )
  }
});

module.exports = FretboardMenu;
