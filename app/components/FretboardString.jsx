var React = require('react');
var utils = require('../utils');

var FretboardString = React.createClass({

  render:function () {
    var {midiNote, note, numberOfNotesOnFretboard} = this.props;
    var fretCount = new Array(numberOfNotesOnFretboard);

    // set the midi notes for each fret
    var midiNoteInt = Number.parseInt(midiNote,10);
    for(var i=0; i < fretCount.length; i++){
      fretCount[i] = midiNoteInt + i;
    }

    var renderFrets = () => {
      return fretCount.map((value, index) => {
               return (
                 <td className={ index > 0 ? 'fret' : 'fret fret-open'}
                   key={value}>{utils.getNoteNameFromMIDINumber(value)}</td>
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
