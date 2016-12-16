import React from 'react'
import { connect } from 'react-redux'
var utils = require('utils')

var FretboardBackground = ( props ) => {
  let { numberOfStrings, selectedTuningKey, fretboardNumberOfNotes, fretboardFretWidth,
        fretboardOpenNoteWidth, fretboardNutWidth, fretboardStringHeight} = props

  // calculate the size
  let newProps = {}
  newProps.x = props.fretboardOpenNoteWidth + props.fretboardNutWidth
  newProps.y = 1
  newProps.height = props.fretboardStringHeight * numberOfStrings
  newProps.width = ( props.fretboardFretWidth *  props.fretboardNumberOfNotes )

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
    selectedTuningKey: state.selectedTuningKey,
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardFretWidth: state.fretboardFretWidth
  }
})( FretboardBackground )
