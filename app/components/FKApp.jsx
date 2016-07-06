var React = require('react');
var Fretboard = require('Fretboard');
var FretboardMenu = require('FretboardMenu');

var FKApp = React.createClass({

  getInitialState: function() {
    return {
      scales: [
        { name: 'Major', degrees: '1,2,3,4,5,6,7', key:"0zz"},
        { name: 'Blues', degrees: '1,♭3,4,♭5,5,♭7', key:"1z"}
      ],
      tunings: [
        { name: 'Standard', notes:'E A D G B E', midiNotes:'40,45,50,55,59,64', key:"d"},
        { name: 'Drop D', notes:'D A D G B E', midiNotes:'35,45,50,55,59,64', key:"dd"}
      ],
      selectedTuningKey: "dd",
      selectedScaleKey: "1z"
    }
  },

  handleChangeScale: function (key) {
    this.setState({
      selectedScaleKey: key
    })
  },

  handleChangeTuning: function (key) {
    this.setState({
      selectedTuningKey: key
    })
  },

  render: function() {
    var {scales, tunings, selectedTuningKey, selectedScaleKey} = this.state;

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} selectedTuningKey={selectedTuningKey}
          selectedScaleKey={selectedScaleKey} onChangeScale={this.handleChangeScale}
          onChangeTuning={this.handleChangeTuning}/>
        <br/>
        <Fretboard tunings={tunings} selectedTuningKey={selectedTuningKey}/>
      </div>
    )
  }
});

module.exports = FKApp;
