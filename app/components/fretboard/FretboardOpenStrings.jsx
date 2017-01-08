import React from 'react'
import { connect } from 'react-redux'
import { getNoteNameFromMIDINumber } from 'utils'
import FretboardOpenString from 'FretboardOpenString'
import SelectedTuningSelector from 'selectedTuning'

var FretboardOpenStrings = ( props ) => {
  let { fretboardStringHeight, fretboardOpenNoteWidth, tuning } = props
  let numberOfStrings = tuning.midiNotes.length

  return (
    <g className="open-strings" cursor="default">
      {
        Array.from( new Array( numberOfStrings ), (( value, index ) => {
          let tempProps =  { y: fretboardStringHeight * index  ,
            height: fretboardStringHeight, width: fretboardOpenNoteWidth,
            midiNote: tuning.midiNotes[ index ],
            noteName: getNoteNameFromMIDINumber( tuning.midiNotes[ index ])}

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
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    tunings: state.tunings,
    tuning: SelectedTuningSelector( state )
  }
})( FretboardOpenStrings )
