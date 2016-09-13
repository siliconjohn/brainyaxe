var React = require('react');
import FretboardSVG from 'FretboardSVG'
import FretboardMenu from 'FretboardMenu';
var {getObjectForKey, getNotesForArray} = require('../utils');

var { initialState } = require('../initialState')

export var FKApp = React.createClass({

  getInitialState: function() {
    return initialState;
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
    var {scales, tunings, selectedTuningKey, selectedScaleKey,numberOfNotesOnFretboard,
        chords, selectedChordKey, selectedNotesForScale, selectedNotesForChord,
        selectedChordNote, selectedScaleNote} = this.state;

    var selectedScale = getObjectForKey(scales,selectedScaleKey)

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} chords={chords} selectedChordNote={selectedChordNote}
          selectedTuningKey={selectedTuningKey} selectedScaleKey={selectedScaleKey} selectedScaleNote={selectedScaleNote}
          selectedChordKey={selectedChordKey} onChangeScale={this.handleChangeScale}
          onChangeChord={this.handleChangeChord}
          onChangeSelectedChordNote={this.handleChangeSelectedChordNote}
          onChangeSelectedScaleNote={this.handleChangeSelectedScaleNote}
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
        <br/>
        <FretboardSVG scale={selectedScale} numberOfNotesOnFretboard={numberOfNotesOnFretboard}
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
      </div>
    )
  }
});

module.exports = FKApp;
