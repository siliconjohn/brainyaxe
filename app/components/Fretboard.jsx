var React = require('react');
var FretboardString = require('FretboardString');

var Fretboard = React.createClass({

  render: function() {
    var {tuning} = this.props;

    var renderStrings = () => {
      var notes = tuning.notes.split(',');

      return tuning.midiNotes.split(',').map((midiNote,index) => {
        return (
           <FretboardString midiNote={midiNote} note={notes[index]} key={index}></FretboardString>
           );
      }).reverse(); // reverse returned array so lowest note is at bottom
    };

    var renderTableHeader = () => {
      var fretCount = new Array(12);

      // TO do: use this to set the width of each fret
      for(var i=0; i < fretCount.length; i++){
        fretCount[i] = i+1;
      }

      // fret numbers
      return fretCount.map((index) => {
        return (
          <th className="header-fret-number" key={index}>{index}</th>
        )
      });
    };

    return (
      <div>
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12">{tuning.name} - {tuning.notes}</div>
        </div>
        <br/>
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12">
            <table className="fretboard-table">
              <thead>
                <tr>
                  <th className="header-note-name" key="note">Note</th>
                  {renderTableHeader()}
                </tr>
              </thead>
              <tbody>
                <tr className="seperator-row"><td></td></tr>
                {renderStrings()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Fretboard;
