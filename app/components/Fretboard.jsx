var React = require('react');

var Fretboard = React.createClass({

  render: function() {
    var {tunings} = this.props;

    var tuning = tunings.find(function(tuning) {
      return tuning.key === this.props.selectedTuningKey ? true : false
    },this);

    return (
      <div>
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12 gray">{tuning.name} - {tuning.notes}</div>
        </div>
      </div>
    )
  }
});

module.exports = Fretboard;
