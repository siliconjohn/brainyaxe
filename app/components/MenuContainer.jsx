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
      <div className="main-menu" data-tabs-content="toolbar-tabs-div">

        <div className="row tabs-panel is-active" id="tunings-panel">
          <div className="column small-centered large-10 medium-12 small-12">
            <div className="row title-bar shadow">
              <h2>Choose Tuning</h2>
            </div>
            <div className="row menu-section shadow">
              <div className="columns small-12">
                <TuningChooser ref="tuningChooser"/>
              </div>
              <div className="columns small-12">
                <CustomTuningContainer/>
              </div>
            </div>
          </div>
        </div>

        <div className="row tabs-panel" id="scales-panel">
          <div className="column small-centered large-8 medium-8 small-10 shadow">
            <div className="row title-bar shadow">
              <h2>Choose Scale</h2>
            </div>
            <div className="row menu-section">
              <div className="columns small-5 medium-4">
                <ScaleNoteChooser/>
              </div>
              <div className="columns small-7 medium-8">
                <ScaleChooser/>
              </div>
            </div>
            <div className="row menu-section no-pad-top">
              <div className="columns small-5 medium-4">
                <ScaleIntervals/>
              </div>
              <div className="columns small-7 medium-8">
                <NoteCirclesScale/>
              </div>
            </div>
          </div>
        </div>

        <div className="row tabs-panel" id="chords-panel">
          <div className="column small-centered large-8 medium-8 small-10 shadow">
            <div className="row title-bar shadow">
              <h2>Choose Chord</h2>
            </div>
            <div className="row menu-section">
              <div className="columns small-5 medium-4">
                <ChordNoteChooser/>
              </div>
              <div className="columns small-7 medium-8">
                <ChordChooser/>
              </div>
            </div>
            <div className="row menu-section no-pad-top">
              <div className="columns small-5 medium-4">
                <ChordIntervals/>
              </div>
              <div className="columns small-7 medium-8">
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
