import React from 'react'
import { connect } from 'react-redux'
import FretboardInlayMarker from 'FretboardInlayMarker'
import SelectedTuningSelector from 'selectedTuning'

// frets to place the markers
const markers = [ 3, 5, 7, 9, 12, 15, 17, 19, 21, 24 ]

var FretboardInlayMarkers = ( props ) => {
  let { fretboardStringHeight, fretboardNutWidth, tuning,
        fretboardOpenNoteWidth, fretboardFretWidth, fretboardNumberOfNotes } = props
  let numberOfStrings = tuning.midiNotes.length

  // set up x and y pos
  let x = fretboardNutWidth + fretboardOpenNoteWidth - fretboardFretWidth
  let y = ( numberOfStrings * fretboardStringHeight ) / 2
  let translate = `translate( ${ x }, ${ y } )`

  return (
    <g transform={ translate } className="inlays">
      {
        markers.map(( number, index ) => {
          let double = false;
          let fretX = ( number * fretboardFretWidth )
          if ( number > fretboardNumberOfNotes ) return ""

          // if less than 3 strings only show single inlay marker
          if( numberOfStrings > 3 && ( number == 12 || number == 24 )) double = true

          let tempProps = { x: fretX, y: 0, fretWidth: fretboardFretWidth,
                            double: double, stringHeight: fretboardStringHeight }

          return (
            <FretboardInlayMarker key={ index } { ...tempProps }/>
          )
        })
      }
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
    tunings: state.tunings,
    tuning: SelectedTuningSelector( state )
  }
})( FretboardInlayMarkers )
