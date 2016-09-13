var React = require('react');
var FretboardOpenNote = require('FretboardOpenNote');
var {twelveNotesTable, getObjectForKey} = require('../utils');
var {connect} = require('react-redux')
var actions = require('../redux/actions')

export var FretboardMenu = React.createClass({

  componentDidMount: function() {
    this._tuningChooser.focus();
  },

  handleChangeScale: function (e) {
    var {dispatch} = this.props;
    var key = e.target.value;
    dispatch(actions.changeScale(key));
  },

  handleChangeTuning: function(e) {
    var {dispatch} = this.props;
    var key = e.target.value;
    dispatch(actions.changeTuning(key));
  },

  handleChangeChord: function(e) {
    var {dispatch} = this.props;
    var key = e.target.value;
    dispatch(actions.changeChord(key));
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
      selectedScaleNote, selectedNotesForScale, selectedNotesForChord} = this.props;

    var renderScaleDegrees = () => {
      var scale = getObjectForKey(scales, selectedScaleKey);
      return (
        <p className="degrees text-center">{scale.degrees}</p>
      )
    }

    var renderChordDegrees = () => {
      var chord = getObjectForKey(chords, selectedChordKey);
      return (
        <p className="degrees text-center">{chord.degrees}</p>
      )
    }

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
      var newProps = { x:0, y:0, width:40, height:50, scaleNote:options.scaleNote,
                       isOpenString:false, chordNote:options.chordNote,
                       note:options.selectedScaleNote, menuDegree:options.degree, key:options.key }
      return (
        <svg width="50" height="50" key={options.key}><FretboardOpenNote {...newProps}/></svg>
      )
    }

    var renderScaleNoteCircles = () => {
      var scale = getObjectForKey(scales, selectedScaleKey);
      var scaleDegrees = scale.degrees.split(',')

      return selectedNotesForScale.map((note,index) => {
        return renderNoteCircle({ selectedScaleNote:note, scaleNote:true, chordNote:false,
                                  degree:scaleDegrees[index], key:index })
      })
    }

    var renderChordNoteCircles = () => {
      var chord = getObjectForKey(chords, selectedChordKey);
      var chordDegrees = chord.degrees.split(',')

      return selectedNotesForChord.map((note,index) => {
        return renderNoteCircle({ selectedScaleNote:note, scaleNote:false, chordNote:true,
                                  degree:chordDegrees[index], key:index })
      })
    }

    var selectedChordNoteIndex = twelveNotesTable.find( function(noteName){
      return noteName === selectedChordNote ? true :false },this);

    var selectedScaleNoteIndex = twelveNotesTable.find( function(noteName){
      return noteName === selectedScaleNote ? true :false },this);

    return (
      <div className="main-menu">

        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10">
            <div className="row fb-header shadow">
              <h5 className="tuning-header-text">Choose Tuning</h5>
            </div>
            <div className="row menu-section tuning-section shadow">
              <select value={selectedTuningKey} onChange={this.handleChangeTuning} ref={(component) => this._tuningChooser = component}>
                {renderTunings()}
              </select>
            </div>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10">
            <h5>Choose Scale</h5>
          </div>
        </div>
        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10 shadow">
            <div className="row menu-section">
              <div className="small-5 medium-4 columns">
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
            <div className="row menu-bottom-row">
              <div className="small-5 medium-4 columns">
                {renderScaleDegrees()}
              </div>
              <div className="small-7 medium-8 columns">
                {renderScaleNoteCircles()}
              </div>
            </div>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10">
            <h5>Choose Chord</h5>
          </div>
        </div>
        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10 shadow">
            <div className="row menu-section">
              <div className="small-5 medium-4 columns">
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
            <div className="row menu-bottom-row">
              <div className="small-5 medium-4 columns">
                {renderChordDegrees()}
              </div>
              <div className="small-7 medium-8 columns">
                {renderChordNoteCircles()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

//module.exports = FretboardMenu;
export default connect(
  (state) => {
    return {
      selectedTuningKey: state.selectedTuningKey,
      selectedScaleKey: state.selectedScaleKey,
      selectedChordKey: state.selectedChordKey,
      tunings: state.tunings,

    }
  }
)(FretboardMenu);
