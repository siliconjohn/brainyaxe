import React from 'react'
import { connect } from 'react-redux'
import FretboardFret from 'FretboardFret'
var utils = require('utils')

var FretboardFrets = ( props ) => {
  let { numberOfStrings, fretboardStringHeight, fretboardNutWidth,
        fretboardOpenNoteWidth, fretboardNumberOfNotes, fretboardFretWidth } = props

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
    fretboardFretWidth: state.fretboardFretWidth
  }
})( FretboardFrets )
