var React = require('react');
var FretboardString = require('FretboardString');

var Fretboard = React.createClass({
  propTypes: {
      tuning: React.PropTypes.object.isRequired,
      numberOfNotesOnFretboard: React.PropTypes.number.isRequired,
      selectedNotesForScale: React.PropTypes.array.isRequired,
      selectedNotesForChord: React.PropTypes.array.isRequired
    },

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
      var result = [];
      result.push ( <th className="header-fret-number header-open-string" key={1}></th> );
      for(var i = 2; i < numberOfNotesOnFretboard + 1; i++){
        result.push ( <th className="header-fret-number" key={i}>{i - 1}</th> );
      }
      return result;
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
