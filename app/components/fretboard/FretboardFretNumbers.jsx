import React from 'react'
import { connect } from 'react-redux'
import FretboardFretNumber from 'FretboardFretNumber'
import SelectedTuningSelector from 'selectedTuning'

var FretboardFretNumbers = ( props ) => {
  let { fretboardStringHeight, fretboardNutWidth, fretboardNumberOfNotes,
        fretboardOpenNoteWidth, tuning, fretboardFretWidth } = props
  let numberOfStrings = tuning.midiNotes.length

  // setup x and y pos
  let x = fretboardNutWidth + fretboardOpenNoteWidth
  let y = numberOfStrings * fretboardStringHeight + 4

  // setup svg translate
  let translate = `translate( ${ x }, ${ y } )`

  return (
    <g transform={ translate } className="fret-numbers" cursor="default">
      {
        Array.from( new Array( fretboardNumberOfNotes ), (( note, index ) => {
          let tempProps = { x:fretboardFretWidth * index, y:14,
                            number:index + 1,
                            parentWidth:fretboardFretWidth }

          return (
            <FretboardFretNumber key={ index } { ...tempProps }/>
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
})( FretboardFretNumbers )
