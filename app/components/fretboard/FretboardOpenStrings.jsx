import React from 'react'
import { connect } from 'react-redux'
import FretboardOpenString from 'FretboardOpenString'
var utils = require('utils')

var FretboardOpenStrings = ( props ) => {
  let { numberOfStrings, tunings, selectedTuningKey, fretboardStringHeight,
        fretboardNutWidth, fretboardOpenNoteWidth} = props

  // get the selected tuning
  try {
    var tuning = utils.getObjectForKey( tunings, selectedTuningKey )
  } catch ( e ) {
    return ( <g></g> )
  }

  return (
    <g className="open-strings" cursor="default">
      {
        Array.from( new Array( numberOfStrings ), (( value, index ) => {
          let tempProps =  { y: fretboardStringHeight * index  ,
                             height: fretboardStringHeight,
                             width: fretboardOpenNoteWidth,
                             midiNote: tuning.midiNotes[ index ],
                             noteName: utils.getNoteNameFromMIDINumber( tuning.midiNotes[ index ])}

          return (
            <FretboardOpenString key={ index } { ...tempProps }/>
          )
        }))
      }
    </g>
  )
}

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth
  }
})( FretboardOpenStrings )
