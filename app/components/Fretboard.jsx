var React = require('react');
var String = require('String');

var Fretboard = React.createClass({

  render: function() {
    var {tuning} = this.props;

    var renderStrings = () => {
      var notes = tuning.notes.split(',');

      return tuning.midiNotes.split(',').map((midiNote,index) => {
        return (
           <String midiNote={midiNote} note={notes[index]} key={index}></String>
           );
      }).reverse(); // reverse returned array so lowest note is at bottom
    };

    return (
      <div>
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12 gray">{tuning.name} - {tuning.notes}</div>
        </div>
        <br/>
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12 gray">
            {renderStrings()}
          </div>
        </div>

      </div>
    )
  }
});

module.exports = Fretboard;
