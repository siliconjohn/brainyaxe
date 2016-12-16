import React from 'react'
import { connect } from 'react-redux'
import FretboardString from 'FretboardString'

var FretboardStrings = ( props ) => {
  let { fretboardNutWidth, fretboardOpenNoteWidth, fretboardNumberOfNotes,
        fretboardFretWidth, fretboardStringHeight, numberOfStrings} = props

  // setup svg translate
  let x = fretboardNutWidth + fretboardOpenNoteWidth
  let translate = `translate( ${ x }, 0 )`

  // setup vars used is positioning strings
  let halfStringHeight = fretboardStringHeight / 2
  let stringWidth = fretboardFretWidth * fretboardNumberOfNotes

  return (
    <g transform={ translate } className="strings">
      {
        Array.from( new Array( numberOfStrings ), (( note, index ) => {
          let tempProps = { x:0, y:( index * fretboardStringHeight ) + halfStringHeight,
                            width: stringWidth }

          return (
            <FretboardString key={ index } { ...tempProps }/>
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
})( FretboardStrings )
