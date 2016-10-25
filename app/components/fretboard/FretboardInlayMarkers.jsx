var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var FretboardInlayMarker = require('FretboardInlayMarker')

var FretboardInlayMarkers = ( props ) => {

  // frets to place the markers
  var markers = [ 3, 5, 7, 9, 12, 15, 17, 19, 21, 24 ]

  // get the number of strings from the selected tuning
  var numberOfStrings
  try {
    var tuning = utils.getObjectForKey( props.tunings, props.selectedTuningKey )
    numberOfStrings = tuning.midiNotes.length
  } catch ( e ) {
    numberOfStrings = 1
  }

  // set up x and y pos
  var x = props.fretboardNutWidth + props.fretboardOpenNoteWidth
  var y = ( numberOfStrings * props.fretboardStringHeight ) / 2
  var translate = `translate( ${ x }, ${ y } )`

  return (
    <g transform={ translate } className="inlays">
      {
        markers.map(( number, index ) => {
          var double = false;
          var fretX = ( number * props.fretboardFretWidth )

          // if less than 3 strings only show single inlay marker
          if( numberOfStrings > 3 && ( number == 12 || number == 24 )) double = true

          var tempProps = { x:fretX, y:0, fretWidth:props.fretboardFretWidth, double:double,
            stringHeight: props.fretboardStringHeight  }

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
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardFretWidth: state.fretboardFretWidth
  }
})( FretboardInlayMarkers )
