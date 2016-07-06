var React = require('react');
var Fretboard = require('Fretboard');
var FretboardMenu = require('FretboardMenu');

var FKApp = React.createClass({

  getInitialState: function() {
    return {
      scales: [
        { name: 'Major', degrees: '1,2,3,4,5,6,7', key:"0"},
        { name: 'Blues', degrees: '1,♭3,4,♭5,5,♭7', key:"1"}
      ],
      tunings: [
        { name: 'Standard', notes:'E A D G B E', midiNotes:'40,45,50,55,59,64', key:"0"},
        { name: 'Drop D', notes:'D A D G B E', midiNotes:'35,45,50,55,59,64', key:"1"}
      ],
      selectedTuningIndex: 1,
      selectedScaleIndex: 1
    }
  },

  handleChangeScale: function (index) {
    this.setState({
      selectedScaleIndex: index
    })
  },

  handleChangeTuning: function (index) {
    this.setState({
      selectedTuningIndex: index
    })
  },

  render: function() {
    var {scales,tunings,selectedTuningIndex,selectedScaleIndex} = this.state;

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} selectedTuningIndex={selectedTuningIndex}
          selectedScaleIndex={selectedScaleIndex} onChangeScale={this.handleChangeScale}
          onChangeTuning={this.handleChangeTuning}/>
        <br/>
        <Fretboard scales={scales} tunings={tunings} tuningIndex={selectedTuningIndex}/>
      </div>
    )
  }
});

module.exports = FKApp;
