import React from 'react'
import { connect } from 'react-redux'
import SelectedTuningSelector from 'selectedTuning'

var FretboardNut = ( props ) => {
  let { tuning, fretboardNutWidth, fretboardStringHeight,
        fretboardOpenNoteWidth } = props
  let numberOfStrings = tuning.midiNotes.length

  let nutSize = {}
  nutSize.x = fretboardOpenNoteWidth
  nutSize.y = 1
  nutSize.height = fretboardStringHeight * numberOfStrings
  nutSize.width = fretboardNutWidth

  return (
    <rect { ...nutSize } className="nut"/>
  )
}

export default connect(( state ) => {
  return {
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    tunings: state.tunings,
    tuning: SelectedTuningSelector( state )
  }
})( FretboardNut )
