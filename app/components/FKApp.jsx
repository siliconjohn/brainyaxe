var React = require('react');
var FretboardSVG = require('FretboardSVG');
var FretboardMenu = require('FretboardMenu');
var {getObjectForKey, getNotesForArray} = require('../utils');

var FKApp = React.createClass({

  getInitialState: function() {
    return {
      scales: [
        { name: 'No Scale', degrees: '', intervals:[], key:"scale0"},
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale1"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"scale2"},
        { name: 'Natural Minor', degrees: '1,2,♭3,4,5,♭6,♭7', intervals:[2,3,5,7,8,10], key:"scale3"},
        { name: 'Harmonic Minor', degrees: '1,2,♭3,4,5,♭6,7', intervals:[2,3,5,7,8,11], key:"scale4"},
        { name: 'Melodic Minor', degrees: '1,2,♭3,4,5,6,7', intervals:[2,3,5,7,9,11], key:"scale5"},
        { name: 'Ionian (Major)', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale6"},
        { name: 'Dorian', degrees: '1,2,♭3,4,5,6,♭7', intervals:[2,3,5,7,9,10], key:"scale7"},
        { name: 'Phrygian', degrees: '1,♭2,♭3,4,5,♭6,♭7', intervals:[1,3,5,7,8,10], key:"scale8"},
        { name: 'Lydian', degrees: '1,2,3,♯4,5,6,7', intervals:[2,4,6,7,9,11], key:"scale9"},
        { name: 'Mixolydian', degrees: '1,2,3,4,5,6,♭7', intervals:[2,4,5,7,9,10], key:"scale10"},
        { name: 'Aeolian (Natural Minor)', degrees: '1,2,♭3,4,5,♭6,♭7', intervals:[2,3,5,7,8,10], key:"scale11"},
        { name: 'Locrian', degrees: '1,♭2,♭3,4,♭5,♭6,♭7', intervals:[1,3,5,6,8,10], key:"scale12"}
      ],
      tunings: [
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"tuning1"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[64,59,55,50,45,38], instrument: "guitar", key:"tuning2"},
        { name: 'Open G', notes:'D,G,D,G,B,D', midiNotes:[62,59,55,50,43,38], instrument: "guitar", key:"tuning3"},
        { name: 'Open A', notes:'E,A,E,A,C♯,E', midiNotes:[64,61,57,52,45,40], instrument: "guitar", key:"tuning4"},
        { name: 'Standard, 7 String', notes:'B,E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40,35], instrument: "guitar", key:"tuning5"},
        { name: 'Bass', notes:'E,A,D,G', midiNotes:[43,38,33,28], instrument: "bass", key:"basstuning1"},
        { name: 'Bass 5 String', notes:'B,E,A,D,G', midiNotes:[43,38,33,28,23], instrument: "bass", key:"basstuning2"},
        { name: 'Bass 6 String', notes:'B,E,A,D,G,C', midiNotes:[48,43,38,33,28,23], instrument: "bass", key:"basstuning3"},

      ],
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"chord0"},
        { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
        { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"},
        { name: 'Augmented', degrees: '1,3,♯5', intervals:[4,8], key:"chord3"},
        { name: 'Diminished', degrees: '1,♭3,♭5', intervals:[3,6], key:"chord4"},
        { name: 'Major 7th', degrees: '1,3,5,7', intervals:[4,7,11], key:"chord5"},
        { name: 'Minor 7th', degrees: '1,♭3,5,♭7', intervals:[3,7,10], key:"chord6"},
        { name: 'Dominant 7th', degrees: '1,3,5,♭7', intervals:[4,7,10], key:"chord7"},
        { name: 'Augmented 7th', degrees: '1,3,♯5,♭7', intervals:[4,8,10], key:"chord8"},
        { name: 'Half Diminished 7th', degrees: '1,♭3,♭5,♭7', intervals:[3,6,10], key:"chord9"},
        { name: 'Diminished 7th', degrees: '1,♭3,♭5,♭♭7', intervals:[3,6,9], key:"chord10"},
        { name: 'Min/Maj 7th', degrees: '1,♭3,5,7', intervals:[3,7,11], key:"chord11"},
        { name: 'Major 9th', degrees: '1,3,5,7,9', intervals:[4,7,11,14], key:"chord12"},
        { name: 'Minor 9th', degrees: '1,♭3,5,♭7,9', intervals:[3,7,10,14], key:"chord13"},
        { name: 'Dominant 9th', degrees: '1,3,5,♭7,9', intervals:[4,7,10,14], key:"chord14"},
        { name: 'Major 6/9th', degrees: '1,3,5,6,9', intervals:[4,7,9,14], key:"chord15"},
        { name: 'Minor 6/9th', degrees: '1,♭3,5,6,9', intervals:[3,7,9,14], key:"chord16"},
        { name: 'Major 11th', degrees: '1,3,5,7,9,11', intervals:[4,7,11,14,17], key:"chord17"},
        { name: 'Minor 11th', degrees: '1,♭3,5,♭7,9,11', intervals:[3,7,10,14,17], key:"chord18"},
        { name: 'Dominant 11th', degrees: '1,3,5,♭7,9,11', intervals:[4,7,10,14,17], key:"chord19"},
        { name: 'Major 13th', degrees: '1,3,5,7,9,11,13', intervals:[4,7,11,14,17,21], key:"chord20"},
        { name: 'Minor 13th', degrees: '1,♭3,5,♭7,9,11,13', intervals:[3,7,10,14,17,21], key:"chord21"},
        { name: 'Dominant 13th', degrees: '1,3,5,♭7,9,11,13', intervals:[4,7,10,14,17,21], key:"chord22"}
      ],
      selectedTuningKey: "tuning1",
      selectedScaleKey: "scale2",
      selectedScaleNote: "A",
      selectedChordKey: "chord0",
      selectedChordNote: "A",
      numberOfNotesOnFretboard: 24,
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

    var selectedTuning = getObjectForKey(tunings,selectedTuningKey)
    var selectedScale = getObjectForKey(scales,selectedScaleKey)

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} chords={chords} selectedChordNote={selectedChordNote}
          selectedTuningKey={selectedTuningKey} selectedScaleKey={selectedScaleKey} selectedScaleNote={selectedScaleNote}
          selectedChordKey={selectedChordKey} onChangeScale={this.handleChangeScale}
          onChangeTuning={this.handleChangeTuning}  onChangeChord={this.handleChangeChord}
          onChangeSelectedChordNote={this.handleChangeSelectedChordNote}
          onChangeSelectedScaleNote={this.handleChangeSelectedScaleNote}
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
        <br/>
        <FretboardSVG tuning={selectedTuning} scale={selectedScale} numberOfNotesOnFretboard={numberOfNotesOnFretboard}
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
      </div>
    )
  }
});

module.exports = FKApp;
