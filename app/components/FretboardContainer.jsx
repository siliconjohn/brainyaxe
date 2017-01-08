import React from 'react'
import { connect } from 'react-redux'
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

export class FretboardContainer extends React.Component {

  render() {
    let { tunings, selectedTuningKey,fretboardNutWidth, fretboardFretWidth,
      fretboardOpenNoteWidth, fretboardStringHeight, fretboardNumberOfNotes,
      fretboardTheme, tuning } = this.props

    var numberOfStrings = tuning.midiNotes.length

    // calculate the size
    const extraHeight = 33
    const extraWidth = fretboardOpenNoteWidth
    var height = fretboardStringHeight * numberOfStrings + extraHeight
    var width = ( fretboardFretWidth * fretboardNumberOfNotes ) +
                  fretboardOpenNoteWidth + fretboardNutWidth + extraWidth

    var fretBoardClassName = "fretboard-svg"
    if( fretboardTheme != "") {
      fretBoardClassName = `${fretBoardClassName} fretboard-${fretboardTheme}`
    }

    return (
      <div className="fretboard-parent">
        <FretboardHeader/>

        <div className="fretboard-svg-parent text-center">
           <svg xmlns="http://www.w3.org/2000/svg" className={ fretBoardClassName } width={ width } height={ height }>
            <FretboardBackground/>
            <FretboardNut/>
            <FretboardFrets/>
            <FretboardInlayMarkers />
            <FretboardStrings/>
            <FretboardFretNumbers/>
            <FretboardOpenStrings/>
            <FretboardNotes/>
          </svg>
        </div>
      </div>
    )
  }
}

FretboardContainer.propTypes = {
  tunings: React.PropTypes.array.isRequired,
  selectedTuningKey: React.PropTypes.string.isRequired,
  fretboardNutWidth: React.PropTypes.number.isRequired,
  fretboardFretWidth: React.PropTypes.number.isRequired,
  fretboardOpenNoteWidth: React.PropTypes.number.isRequired,
  fretboardStringHeight: React.PropTypes.number.isRequired,
  fretboardNumberOfNotes: React.PropTypes.number.isRequired,
  fretboardTheme: React.PropTypes.string.isRequired,
  tuning: React.PropTypes.object.isRequired
}

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
    tuning: SelectedTuningSelector( state )
  }
})( FretboardContainer )
