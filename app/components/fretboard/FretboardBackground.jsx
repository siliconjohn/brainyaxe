import React from 'react'
import { connect } from 'react-redux'
import SelectedTuningSelector from 'selectedTuning'

var FretboardBackground = ( props ) => {
  let { tuning, fretboardNumberOfNotes, fretboardFretWidth,
    fretboardOpenNoteWidth, fretboardNutWidth, fretboardStringHeight} = props
  let numberOfStrings = tuning.midiNotes.length

  // calculate the size
  let newProps = {}
  newProps.x = fretboardOpenNoteWidth + fretboardNutWidth
  newProps.y = 1
  newProps.height = fretboardStringHeight * numberOfStrings
  newProps.width = ( fretboardFretWidth *  fretboardNumberOfNotes )

  let polylinePoints = `${ newProps.x + newProps.width}, ${ newProps.y }, \
                        ${ newProps.x}, ${ newProps.y }, \
                        ${ newProps.x }, ${ newProps.y + newProps.height }, \
                        ${ newProps.x + newProps.width}, ${ newProps.y + newProps.height }`

  return (
    <g>
      <rect { ...newProps } className="background"/>
      <polyline points={ polylinePoints } className="background-outline"/>
    </g>
  )
}
export default connect(( state ) => {
  return {
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardFretWidth: state.fretboardFretWidth,
    unings: state.tunings,
    tuning: SelectedTuningSelector( state )
  }
})( FretboardBackground )
