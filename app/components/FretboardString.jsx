var React = require('react');
var {getNoteNameFromMIDINumber, isNoteInArray} = require('../utils');

var FretboardString = React.createClass({

  render:function () {
    var {midiNote, note, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord} = this.props;

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

        var tdClass =  index > 0 ? 'fret' : 'fret fret-open';
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
