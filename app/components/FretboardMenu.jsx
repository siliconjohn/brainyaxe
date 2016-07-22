var React = require('react');
var FretboardOpenNote = require('FretboardOpenNote');
var {twelveNotesTable} = require('../utils');

var FretboardMenu = React.createClass({

  componentDidMount: function() {
    this._tuningChooser.focus();
  },

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

    var renderNoteCircle = ( options ) => {
      var newProps = { x:0, y:0, width:40, height:40, scaleNote:options.scaleNote,
                       isOpenString:false, chordNote:options.chordNote,
                       note:options.selectedScaleNote, key:"" }
      return (
        <svg width="40" height="40"><FretboardOpenNote {...newProps}/></svg>
      )
    }

    var selectedChordNoteIndex = twelveNotesTable.find( function(noteName){
      return noteName === selectedChordNote ? true :false },this);

    var selectedScaleNoteIndex = twelveNotesTable.find( function(noteName){
      return noteName === selectedScaleNote ? true :false },this);

    return (
      <div className="row">
        <div className="column small-centered large-8 medium-8 small-10 gray">

          <h4>Choose Tuning</h4>
          <select value={selectedTuningKey} onChange={this.handleChangeTuning} ref={(component) => this._tuningChooser = component}>
            {renderTunings()}
          </select>

          <h4>Choose Scale</h4>
          <div className="row">
            <div className="small-1 medium-1 columns no-horz-padding text-center">
              {renderNoteCircle({selectedScaleNote:selectedScaleNote,scaleNote:true,chordNote:false})}
            </div>
            <div className="small-4 medium-3 columns">
              <select value={selectedScaleNoteIndex} onChange={this.handleChangeSelectedScaleNote}>
                {renderTwelveNotes()}
              </select>
            </div>
            <div className="small-7 medium-8 columns">
              <select value={selectedScaleKey} onChange={this.handleChangeScale}>
                {renderScales()}
              </select>
            </div>
          </div>

          <h4>Choose Chord</h4>
          <div className="row">
            <div className="small-1 medium-1 columns no-horz-padding text-center">
              {renderNoteCircle({selectedScaleNote:selectedChordNote,scaleNote:false,chordNote:true})}
            </div>
            <div className="small-4 medium-3 columns">
              <select value={selectedChordNoteIndex} onChange={this.handleChangeSelectedChordNote}>
               {renderTwelveNotes()}
              </select>
            </div>
            <div className="small-7 medium-8 columns">
              <select value={selectedChordKey} onChange={this.handleChangeChord}>
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
