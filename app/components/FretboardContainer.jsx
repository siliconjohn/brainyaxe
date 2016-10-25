var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils');
import FretboardNut from 'FretboardNut'
import FretboardFrets from 'FretboardFrets'
import FretboardHeader from 'FretboardHeader'
import FretboardStrings from 'FretboardStrings'
import FretboardBackground from 'FretboardBackground'
import FretboardFretNumbers from 'FretboardFretNumbers'
import FretboardOpenStrings from 'FretboardOpenStrings'
import FretboardInlayMarkers from 'FretboardInlayMarkers'
import FretboardNotes from 'FretboardNotes'

export var FretboardContainer = React.createClass({

  render: function () {

    // get the number of strings from the selected tuning
    var numberOfStrings
    try {
      var tuning = utils.getObjectForKey( this.props.tunings, this.props.selectedTuningKey )
      numberOfStrings = tuning.midiNotes.length
    } catch ( e ) {
      numberOfStrings = 1
    }

    // calculate the size
    var height = this.props.fretboardStringHeight * ( numberOfStrings + 1 )
    var width = ( this.props.fretboardFretWidth * this.props.fretboardNumberOfNotes ) +
                  this.props.fretboardOpenNoteWidth + this.props.fretboardNutWidth

    return (
      <div>
        <div className="row fb-header shadow">
          <div className="column small-centered large-12 medium-12 small-12">
            <FretboardHeader/>
          </div>
        </div>
        <div className="row shadow">
          <div className="fretboard-parent column small-centered large-12 medium-12 small-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="fretboard" width={ width } height={ height }>
              <FretboardBackground/>
              <FretboardInlayMarkers/>
              <FretboardFretNumbers/>
              <FretboardNut/>
              <FretboardFrets/>
              <FretboardStrings/>
              <FretboardNotes/>
              <FretboardOpenStrings/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
})

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardFretWidth: state.fretboardFretWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNumberOfNotes: state.fretboardNumberOfNotes
  }
})( FretboardContainer )
