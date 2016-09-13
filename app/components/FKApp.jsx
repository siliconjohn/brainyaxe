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

  render: function() {
    var {scales, tunings, selectedTuningKey, selectedScaleKey,
        chords, selectedChordKey, selectedNotesForScale, selectedNotesForChord,
        selectedChordNote, selectedScaleNote} = this.state;

    return (
      <div>
        <br/>
        <FretboardMenu scales={scales} tunings={tunings} chords={chords} selectedChordNote={selectedChordNote}
          selectedTuningKey={selectedTuningKey} selectedScaleKey={selectedScaleKey} selectedScaleNote={selectedScaleNote}
          selectedChordKey={selectedChordKey} 
          selectedNotesForScale={selectedNotesForScale} selectedNotesForChord={selectedNotesForChord}/>
        <br/>
        <FretboardSVG/>
      </div>
    )
  }
});

module.exports = FKApp;
