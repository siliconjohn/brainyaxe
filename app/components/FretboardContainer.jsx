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
import SelectedTuningSelector from 'selectedTuning'

export var FretboardContainer = React.createClass({

  render: function () {
    
    var tuning = this.props.mytuning
    var numberOfStrings = tuning.midiNotes.length

    // calculate the size
    const extraHeight = 33
    const extraWidth = this.props.fretboardOpenNoteWidth
    var height = this.props.fretboardStringHeight * numberOfStrings + extraHeight
    var width = ( this.props.fretboardFretWidth * this.props.fretboardNumberOfNotes ) +
                  this.props.fretboardOpenNoteWidth + this.props.fretboardNutWidth + extraWidth

    var fretBoardClassName = "fretboard-svg"
    if( this.props.fretboardTheme != "") {
      fretBoardClassName = `${fretBoardClassName} fretboard-${this.props.fretboardTheme}`
    }

    return (
      <div className="fretboard-parent">
        <FretboardHeader/>

        <div className="fretboard-svg-parent text-center">
           <svg xmlns="http://www.w3.org/2000/svg" className={ fretBoardClassName } width={ width } height={ height }>
            <FretboardBackground numberOfStrings={ numberOfStrings }/>
            <FretboardNut numberOfStrings={ numberOfStrings } fretboardStringHeight={ this.props.fretboardStringHeight}
                fretboardNutWidth={ this.props.fretboardNutWidth } fretboardOpenNoteWidth={this.props.fretboardOpenNoteWidth} />
            <FretboardFrets  numberOfStrings={ numberOfStrings }/>
            <FretboardInlayMarkers  numberOfStrings={ numberOfStrings }/>
            <FretboardStrings numberOfStrings={ numberOfStrings } />
            <FretboardFretNumbers numberOfStrings={ numberOfStrings } />
            <FretboardOpenStrings  numberOfStrings={ numberOfStrings }  />
            <FretboardNotes/>
          </svg>
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
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardTheme: state.fretboardTheme,
    mytuning: SelectedTuningSelector( state )
  }
})( FretboardContainer )
