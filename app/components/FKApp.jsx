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
      tunings: [
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[40,45,50,55,59,64], key:"d"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[38,45,50,55,59,64], key:"dd"}
      ],
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"03z"},
        { name: 'Major', degrees: 'R,3,♭5', intervals:[4,7], key:"ad"},
        { name: 'Minor', degrees: 'R,♭3,5', intervals:[3,7], key:"dw"}
      ],
      selectedTuningKey: "d",
      selectedScaleKey: "033z",
      selectedScaleNote: "E",
      selectedChordKey: "03z",
      selectedChordNote: "D",
      numberOfNotesOnFretboard: 25,
      selectedNotesForScale: [],
      selectedNotesForChord: []
    }
  },

  componentWillMount: function() {
    // set the inital state for things that are calculated by the app
    var {scales, selectedScaleKey, chords, selectedChordKey, selectedScaleNote,
        selectedChordNote} = this.state;

    var scale = getObjectForKey(scales, selectedScaleKey);
    var chord = getObjectForKey(chords, selectedChordKey);

    this.setState({
      selectedNotesForScale : getNotesForArray(scale, selectedScaleNote),
      selectedNotesForChord : getNotesForArray(chord, selectedChordNote)
    })
  },

  handleChangeScale: function (key) {
    var {scales, selectedScaleNote} = this.state;

    this.setState({
      selectedScaleKey: key,
      selectedNotesForScale : getNotesForArray(getObjectForKey(scales, key), selectedScaleNote)
    })
  },

  handleChangeTuning: function (key) {
    this.setState({
      selectedTuningKey: key
    })
  },

  handleChangeChord: function (key) {
    var {chords, selectedChordNote} = this.state;

    this.setState({
      selectedChordKey: key,
      selectedNotesForChord : getNotesForArray(getObjectForKey(chords, key), selectedChordNote)
    })
  },

  handleChangeSelectedChordNote: function ( note ) {
    var {chords, selectedChordKey} = this.state;

    this.setState({
      selectedChordNote: note,
      selectedNotesForChord : getNotesForArray(getObjectForKey(chords, selectedChordKey), note)
    })
  },

  handleChangeSelectedScaleNote: function ( note ) {
    var {scales, selectedScaleKey} = this.state;

    this.setState({
      selectedScaleNote: note,
      selectedNotesForScale : getNotesForArray(getObjectForKey(scales, selectedScaleKey), note)
    })
  },

  render: function() {
    var {scales, tunings, selectedTuningKey, selectedScaleKey, numberOfNotesOnFretboard,
        chords, selectedChordKey, selectedNotesForScale, selectedNotesForChord,
        selectedChordNote, selectedScaleNote} = this.state;

    var selectedTuning = getObjectForKey(tunings,selectedTuningKey);

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} chords={chords} selectedChordNote={selectedChordNote}
          selectedTuningKey={selectedTuningKey} selectedScaleKey={selectedScaleKey} selectedScaleNote={selectedScaleNote}
          selectedChordKey={selectedChordKey} onChangeScale={this.handleChangeScale}
          onChangeTuning={this.handleChangeTuning}  onChangeChord={this.handleChangeChord}
          onChangeSelectedChordNote={this.handleChangeSelectedChordNote}
          onChangeSelectedScaleNote={this.handleChangeSelectedScaleNote}/>
        <br/>
        <Fretboard tuning={selectedTuning} numberOfNotesOnFretboard={numberOfNotesOnFretboard}
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
      </div>
    )
  }
});

module.exports = FKApp;
