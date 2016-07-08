var React = require('react');
var Fretboard = require('Fretboard');
var FretboardMenu = require('FretboardMenu');

var FKApp = React.createClass({

  getInitialState: function() {
    return {
      scales: [
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:'0,2,4,5,7,9,11', key:"0zz"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:'0,3,5,7,9,10', key:"1z"}
      ],
      tunings: [
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:'40,45,50,55,59,64', key:"d"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:'38,45,50,55,59,64', key:"dd"}
      ],
      chords: [
        { name: 'Major', degrees: 'R,3,♭5', intervals:'0,4,7', key:"ad"},
        { name: 'Minor', degrees: 'R,♭3,5', intervals:'0,4,7', key:"dw"}
      ],
      selectedTuningKey: "d",
      selectedScaleKey: "1z",
      selectedChordKey: "dw",
      numberOfNotesOnFretboard: 25
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

  handleChangeChord: function (key) {
    this.setState({
      selectedChordKey: key
    })
  },

  render: function() {
    var {scales, tunings, selectedTuningKey, selectedScaleKey, numberOfNotesOnFretboard,
        chords, selectedChordKey} = this.state;

    var selectedTuning = tunings.find(function(tuning) {
      return tuning.key === this.state.selectedTuningKey ? true : false
    },this);

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} chords={chords}
          selectedTuningKey={selectedTuningKey} selectedScaleKey={selectedScaleKey}
          selectedChordKey={selectedChordKey} onChangeScale={this.handleChangeScale}
          onChangeTuning={this.handleChangeTuning}  onChangeChord={this.handleChangeChord}/>
        <br/>
        <Fretboard tuning={selectedTuning} numberOfNotesOnFretboard={numberOfNotesOnFretboard}/>
      </div>
    )
  }
});

module.exports = FKApp;
