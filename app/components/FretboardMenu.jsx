var React = require('react');

var FretboardMenu = React.createClass({

  changeScale: function (e) {
    var key = e.target.value;
    this.props.onChangeScale(key);
  },

  changeTuning: function(e) {
    var key = e.target.value;
    this.props.onChangeTuning(key);
  },

  render: function() {
    var {scales, tunings, selectedTuningKey, selectedScaleKey} = this.props;

    var renderScales = () => {
      return scales.map((scale) => {
        return (
          <option key={scale.key} value={scale.key}>{scale.name}</option>
        )
      })
    };

    var renderTunings = () => {
      return tunings.map((tuning) => {
        return (
          <option key={tuning.key} value={tuning.key}>{tuning.name} - {tuning.notes}</option>
        )
      })
    };

    return (
      <div className="row">
        <div className="column small-centered large-8 medium-8 small-10 gray">
          <h4>Choose Tuning</h4>
          <select value={selectedTuningKey} onChange={this.changeTuning} ref="tuningChooser">
            {renderTunings()}
          </select>
          <h4>Choose Scale</h4>
          <select value={selectedScaleKey} onChange={this.changeScale} ref="scaleChooser">
            {renderScales()}
          </select>
        </div>
      </div>
    )
  }
});

module.exports = FretboardMenu;
