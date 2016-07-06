var React = require('react');

var FretboardString = React.createClass({

  render:function () {
    var {midiNote, note, numberOfFrets} = this.props;
    var fretCount = new Array(numberOfFrets);

    // set the midi notes for each fret
    var midiNoteInt = Number.parseInt(midiNote,10);
    for(var i=0; i < fretCount.length; i++){
      fretCount[i] = midiNoteInt + i;
    }

    var renderStringName = () => {
      return (
        <td className="string-name" key={note}>{note}</td>
      )
    };

    var renderFrets = () => {
      return fretCount.map((value, index) => {
               return (
                 <td className="string-fr" key={value}>{value}</td>
               )
             });
    };

    return (
      <tr className="string-row">
        {renderStringName()}
        {renderFrets()}
      </tr>
    )
  }
});

module.exports = FretboardString;
