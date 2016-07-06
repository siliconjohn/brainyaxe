var React = require('react');

var FretboardMenu = React.createClass({

  changeScale: function () {
    var index = this.refs.scaleChooser.selectedIndex;
    this.props.onChangeScale(index);
  },

  changeTuning: function(e) {
    var index = this.refs.tuningChooser.selectedIndex;
    this.props.onChangeTuning(index);
  },

  render: function() {
    var {scales,tunings,selectedTuningIndex,selectedScaleIndex} = this.props;

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
          <select value={selectedTuningIndex} onChange={this.changeTuning} ref="tuningChooser">
            {renderTunings()}
          </select>
          <h4>Choose Scale</h4>
          <select value={selectedScaleIndex} onChange={this.changeScale} ref="scaleChooser">
            {renderScales()}
          </select>
        </div>
      </div>
    )
  }
});

module.exports = FretboardMenu;
