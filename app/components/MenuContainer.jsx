var React = require('react')
var ReactDOM = require('react-dom')
var FretboardOpenNote = require('FretboardOpenNote')
import CustomTuningContainer from 'CustomTuningContainer'
var {twelveNotesTable, getObjectForKey, getNotesForArray} = require('utils')
var {connect} = require('react-redux')
var actions = require('actions')
import ScaleIntervals from 'ScaleIntervals'
import ChordIntervals from 'ChordIntervals'
import TuningChooser from 'TuningChooser'
import ChordNoteChooser from 'ChordNoteChooser'
import ScaleNoteChooser from 'ScaleNoteChooser'
import ScaleChooser from 'ScaleChooser'
import ChordChooser from 'ChordChooser'

export var MenuContainer = React.createClass({

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.tuningChooser).focus();
  },

  render: function() {

    var {scales, tunings, chords, selectedTuningKey,
      selectedChordKey, selectedScaleKey, selectedChordNote,
      selectedScaleNote, selectedNotesForScale, selectedNotesForChord} = this.props;

    // derived data
    var selectedNotesForScale = getNotesForArray(getObjectForKey(scales, selectedScaleKey), selectedScaleNote)
    var selectedNotesForChord = getNotesForArray(getObjectForKey(chords, selectedChordKey), selectedChordNote)

    var { dispatch } = this.props;

    var renderNoteCircle = ( options ) => {
      var newProps = { x:0, y:0, width:40, height:50, scaleNote:options.scaleNote,
                       isOpenString:false, chordNote:options.chordNote,
                       note:options.selectedScaleNote, menuDegree:options.degree, key:options.key }
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" key={options.key}><FretboardOpenNote {...newProps}/></svg>
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
              <TuningChooser ref="tuningChooser"/>
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
                <ScaleNoteChooser/>
              </div>
              <div className="small-7 medium-8 columns">
                <ScaleChooser/>
              </div>
            </div>
            <div className="row menu-bottom-row">
              <div className="small-5 medium-4 columns">
                <ScaleIntervals/>
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
                <ChordNoteChooser/>
              </div>
              <div className="small-7 medium-8 columns">
                <ChordChooser/>
              </div>
            </div>
            <div className="row menu-bottom-row">
              <div className="small-5 medium-4 columns">
                <ChordIntervals/>
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
