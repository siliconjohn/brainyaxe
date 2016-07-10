var React = require('react');
var {twelveNotesTable} = require('../utils');

var FretboardMenu = React.createClass({

  handleChangeScale: function (e) {
    var key = e.target.value;
    this.props.onChangeScale(key);
  },

  handleChangeTuning: function(e) {
    var key = e.target.value;
    this.props.onChangeTuning(key);
  },

  handleChangeChord: function(e) {
    var key = e.target.value;
    this.props.onChangeChord(key);
  },

  handleChangeSelectedChordNote: function(e) {
    var note = e.target.value;
    this.props.onChangeSelectedChordNote(note);
  },

  handleChangeSelectedScaleNote: function(e) {
    var note = e.target.value;
    this.props.onChangeSelectedScaleNote(note);
  },

  render: function() {
    var {scales, tunings, chords, selectedTuningKey,
      selectedChordKey, selectedScaleKey, selectedChordNote,
      selectedScaleNote} = this.props;

    var renderScales = () => {
      return scales.map((scale) => {
        return (
          <option key={scale.key} value={scale.key}>{scale.name}</option>
        )
      })
    };

    var renderTunings = () => {
      return tunings.map((tuning) => {
        return (
          <option key={tuning.key} value={tuning.key}>{tuning.name} - {tuning.notes}</option>
        )
      })
    };

    var renderChords = () => {
      return chords.map((chord) => {
        return (
          <option key={chord.key} value={chord.key}>{chord.name}</option>
        )
      })
    };

    var renderTwelveNotes = () => {
      return twelveNotesTable.map((tone,index) => {
        return (
          <option key={index} value={tone}>{tone}</option>
        )
      })
    };

    var selectedChordNoteIndex = twelveNotesTable.find( function(ref){
      return ref === selectedChordNote ? true :false },this);

    var selectedScaleNoteIndex = twelveNotesTable.find( function(ref){
        return ref === selectedScaleNote ? true :false },this);

    return (
      <div className="row">
        <div className="column small-centered large-8 medium-8 small-10">

          <h4>Choose Tuning</h4>
          <select value={selectedTuningKey} onChange={this.handleChangeTuning} ref="tuningChooser">
            {renderTunings()}
          </select>

          <h4>Choose Scale</h4>
          <div className="row">
            <div className="small-4 medium-2 columns">
              <select value={selectedScaleNoteIndex} onChange={this.handleChangeSelectedScaleNote} ref="scaleNoteChooser">
                {renderTwelveNotes()}
              </select>
            </div>
            <div className="small-8 medium-10 columns">
              <select value={selectedScaleKey} onChange={this.handleChangeScale} ref="scaleChooser">
                {renderScales()}
              </select>
            </div>
          </div>

          <h4>Choose Chord</h4>
          <div className="row">
            <div className="small-4 medium-2 columns">
              <select value={selectedChordNoteIndex} onChange={this.handleChangeSelectedChordNote} ref="chordNoteChooser">
               {renderTwelveNotes()}
              </select>
            </div>
            <div className="small-8 medium-10 columns">
              <select value={selectedChordKey} onChange={this.handleChangeChord} ref="chordChooser">
                {renderChords()}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FretboardMenu;
