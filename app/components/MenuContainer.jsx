var React = require('react')
var ReactDOM = require('react-dom')
import CustomTuningContainer from 'CustomTuningContainer'
import ScaleIntervals from 'ScaleIntervals'
import ChordIntervals from 'ChordIntervals'
import TuningChooser from 'TuningChooser'
import ChordNoteChooser from 'ChordNoteChooser'
import ScaleNoteChooser from 'ScaleNoteChooser'
import ScaleChooser from 'ScaleChooser'
import ChordChooser from 'ChordChooser'
import NoteCirclesScale from 'NoteCirclesScale'
import NoteCirclesChord from 'NoteCirclesChord'

var MenuContainer = React.createClass({

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.tuningChooser).focus();
  },

  render: function() {
    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10">
            <div className="row header shadow">
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
                <NoteCirclesScale/>
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
                <NoteCirclesChord/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = MenuContainer;
