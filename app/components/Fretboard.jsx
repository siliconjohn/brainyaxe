var React = require('react');
var FretboardString = require('FretboardString');

var Fretboard = React.createClass({

  render: function() {
    var {tuning, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord} = this.props;

    var renderStrings = () => {
      var notes = tuning.notes.split(',');

      return tuning.midiNotes.map((midiNote,index) => {
        var topString = index == notes.length -1 ? true : false;

        return (
           <FretboardString numberOfNotesOnFretboard={numberOfNotesOnFretboard} midiNote={midiNote}
             note={notes[index]} key={index} selectedNotesForScale={selectedNotesForScale}
             selectedNotesForChord={selectedNotesForChord} topString={topString}>
           </FretboardString>
           );
      }).reverse(); // reverse returned array so lowest note is at bottom
    };

    var renderTableHeader = () => {
      var fretCount = new Array(numberOfNotesOnFretboard);

      // TO do: use this to set the width of each fret
      for(var i=0; i < fretCount.length; i++){
        fretCount[i] = i+1;
      }

      // fret numbers
      return fretCount.map((index) => {
        if(index == 1) {
          return (
            <th className="header-fret-number header-open-string" key={index}></th>
          )
        } else {
          return (
            <th className="header-fret-number" key={index}>{index - 1}</th>
          )
        }
      });
    };

    return (
      <div>
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12"><h3>{tuning.name} - {tuning.notes}</h3></div>
        </div>
        <br/>

        <div className="row">
          <div className="fretboard-parent column small-centered large-12 medium-12 small-12">
            <table className="fretboard-table" role="grid">
              <tfoot>
                <tr>
                  {renderTableHeader()}
                </tr>
              </tfoot>
              <tbody>
                {renderStrings()}
                <tr className="seperator-row"><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Fretboard;
