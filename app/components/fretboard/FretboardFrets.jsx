import React from 'react'
import { connect } from 'react-redux'
import FretboardFret from 'FretboardFret'
import SelectedTuningSelector from 'selectedTuning'
 
var FretboardFrets = ( props ) => {
  let { tuning, fretboardStringHeight, fretboardNutWidth,
        fretboardOpenNoteWidth, fretboardNumberOfNotes, fretboardFretWidth } = props
  let numberOfStrings = tuning.midiNotes.length

  // set up x and y pos
  let x = fretboardNutWidth + fretboardOpenNoteWidth + fretboardFretWidth
  let height = numberOfStrings * fretboardStringHeight

  // svg position
  let translate = `translate( ${ x }, 1 )`

  return (
    <g transform={ translate } className="frets">
      {
        Array.from( new Array( fretboardNumberOfNotes ), (( note, index ) => {
          let tempProps =  { x: fretboardFretWidth * index, height: height  }

          return (
            <FretboardFret key={ index } { ...tempProps }/>
          )
        }))
      }
    </g>
  )
}

export default connect(( state ) => {
  return {
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardFretWidth: state.fretboardFretWidth,
    tunings: state.tunings,
    tuning: SelectedTuningSelector( state )
  }
})( FretboardFrets )
