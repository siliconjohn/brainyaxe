var React = require('react')
var FretboardOpenNote = require('FretboardOpenNote')
import CustomTuningContainer from 'CustomTuningContainer'
var {twelveNotesTable, getObjectForKey, getNotesForArray} = require('utils')
var {connect} = require('react-redux')
var actions = require('actions')

export var MenuContainer = React.createClass({

  componentDidMount: function() {
    this._tuningChooser.focus();
  },

  render: function() {

    var {scales, tunings, chords, selectedTuningKey,
      selectedChordKey, selectedScaleKey, selectedChordNote,
      selectedScaleNote, selectedNotesForScale, selectedNotesForChord} = this.props;

    // derived data
    var selectedNotesForScale = getNotesForArray(getObjectForKey(scales, selectedScaleKey), selectedScaleNote)
    var selectedNotesForChord = getNotesForArray(getObjectForKey(chords, selectedChordKey), selectedChordNote)

    var { dispatch } = this.props;

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

    return (
      <div className="main-menu">

        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10">
            <div className="row fb-header shadow">
              <h5 className="tuning-header-text">Choose Tuning</h5>
            </div>
            <div className="row menu-section tuning-section shadow">
              <select value={selectedTuningKey} onChange={ (e) => dispatch( actions.changeTuning( e.target.value ))}
                ref={(component) => this._tuningChooser = component}>
                {renderTunings()}
              </select>
              <CustomTuningContainer/>
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
                <select value={ selectedScaleNote } onChange={ (e) => dispatch( actions.changeScaleNote( e.target.value ))}>
                  {renderTwelveNotes()}
                </select>
              </div>
              <div className="small-7 medium-8 columns">
                <select value={ selectedScaleKey } onChange={ (e) => dispatch( actions.changeScale( e.target.value ))}>
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
                <select value={ selectedChordNote } onChange={ (e) => dispatch( actions.changeChordNote( e.target.value ))}>
                 {renderTwelveNotes()}
                </select>
              </div>
              <div className="small-7 medium-8 columns">
                <select value={ selectedChordKey } onChange={ (e) => dispatch( actions.changeChord( e.target.value ))}>
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

//module.exports = MenuContainer;
export default connect(
  (state) => {
    return {
      selectedTuningKey: state.selectedTuningKey,
      selectedScaleKey: state.selectedScaleKey,
      selectedChordKey: state.selectedChordKey,
      selectedChordNote: state.selectedChordNote,
      selectedScaleNote: state.selectedScaleNote,
      tunings: state.tunings,
      scales: state.scales,
      chords: state.chords,
    }
  }
)(MenuContainer);
