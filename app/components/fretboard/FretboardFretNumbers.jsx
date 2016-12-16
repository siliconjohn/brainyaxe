import React from 'react'
import { connect } from 'react-redux'
import FretboardFretNumber from 'FretboardFretNumber'

var FretboardFretNumbers = ( props ) => {

  // setup x and y pos
  let x = props.fretboardNutWidth + props.fretboardOpenNoteWidth
  let y = props.numberOfStrings * props.fretboardStringHeight + 4

  // setup svg translate
  let translate = `translate( ${ x }, ${ y } )`

  return (
    <g transform={ translate } className="fret-numbers" cursor="default">
      {
        Array.from( new Array( props.fretboardNumberOfNotes ), (( note, index ) => {
          let tempProps = { x:props.fretboardFretWidth * index, y:14,
                            number:index + 1,
                            parentWidth:props.fretboardFretWidth }

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
    fretboardFretWidth: state.fretboardFretWidth
  }
})( FretboardFretNumbers )
