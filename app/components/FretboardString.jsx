var React = require('react');
var {getNoteNameFromMIDINumber, isNoteInArray} = require('../utils');

var FretboardString = React.createClass({

  render:function () {
    var {midiNote, note, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord, topString} = this.props;

    var fretCount = new Array(numberOfNotesOnFretboard);

    // set the midi notes for each fret
    var midiNoteInt = Number.parseInt(midiNote,10);
    for(var i=0; i < fretCount.length; i++){
      fretCount[i] = midiNoteInt + i;
    }

    var renderFrets = () => {
      return fretCount.map((value, index) => {
        var selectedScale = isNoteInArray(value,selectedNotesForScale)
        var selectedChord = isNoteInArray(value,selectedNotesForChord)

        // set classes for the fret
        var tdClass =  'fret'

        // set classes for the top and bottom borders
        if( topString == true ) {
          tdClass += ' top-string';
        } else {
          tdClass += ' non-top-string';
        }

        // if open fret
        if(index == 0 ) tdClass += ' fret fret-open';

        // selected chord or scale note
        tdClass = selectedScale ? tdClass + ' fret-selected-scale': tdClass;
        tdClass = selectedChord ? tdClass + ' fret-selected-chord': tdClass;

        return (
           <td className={tdClass}
             key={value}>{getNoteNameFromMIDINumber(value)}</td>
         )
       });
    };

    return (
      <tr className="string-row">
        {renderFrets()}
      </tr>
    )
  }
});

module.exports = FretboardString;
