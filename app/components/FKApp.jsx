var React = require('react');
var Fretboard = require('Fretboard');
var FretboardMenu = require('FretboardMenu');
var {getObjectForKey, getNotesForArray} = require('../utils');

var FKApp = React.createClass({

  getInitialState: function() {
    return {
      scales: [
        { name: 'No Scale', degrees: '', intervals:[], key:"033z"},
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"0zz"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"1z"}
      ],
      tunings: [                                 //TODO refraction midiNotes to an array
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:'40,45,50,55,59,64', key:"d"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:'38,45,50,55,59,64', key:"dd"}
      ],
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"03z"},
        { name: 'Major', degrees: 'R,3,♭5', intervals:[4,7], key:"ad"},
        { name: 'Minor', degrees: 'R,♭3,5', intervals:[3,7], key:"dw"}
      ],
      selectedTuningKey: "d",
      selectedScaleKey: "033z",
      selectedChordKey: "03z",
      numberOfNotesOnFretboard: 25,
      selectedNotesForScale: [],
      selectedNotesForChord: []
    }
  },

  componentWillMount: function() {
    // set the inital state for things that are calculated by the app
    var {scales, selectedScaleKey, chords, selectedChordKey} = this.state;

    var scale = getObjectForKey(scales, selectedScaleKey);
    var chord = getObjectForKey(chords, selectedChordKey);

    this.setState({
      selectedNotesForScale : getNotesForArray(scale, "E"),
      selectedNotesForChord : getNotesForArray(chord, "E")
    })
  },

  handleChangeScale: function (key) {
    var {scales} = this.state;

    this.setState({
      selectedScaleKey: key,
      selectedNotesForScale : getNotesForArray(getObjectForKey(scales, key), "E")
    })
  },

  handleChangeTuning: function (key) {
    this.setState({
      selectedTuningKey: key
    })
  },

  handleChangeChord: function (key) {
    var {chords} = this.state;

    this.setState({
      selectedChordKey: key,
      selectedNotesForChord : getNotesForArray(getObjectForKey(chords, key), "E")
    })
  },

  render: function() {
    var {scales, tunings, selectedTuningKey, selectedScaleKey, numberOfNotesOnFretboard,
        chords, selectedChordKey, selectedNotesForScale, selectedNotesForChord} = this.state;

    var selectedTuning = getObjectForKey(tunings,selectedTuningKey);

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} chords={chords}
          selectedTuningKey={selectedTuningKey} selectedScaleKey={selectedScaleKey}
          selectedChordKey={selectedChordKey} onChangeScale={this.handleChangeScale}
          onChangeTuning={this.handleChangeTuning}  onChangeChord={this.handleChangeChord}/>
        <br/>
        <Fretboard tuning={selectedTuning} numberOfNotesOnFretboard={numberOfNotesOnFretboard}
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
      </div>
    )
  }
});

module.exports = FKApp;
