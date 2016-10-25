var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var FretboardFret = require('FretboardFret')

var FretboardFrets = ( props ) => {

  // get the number of strings from the selected tuning
  var numberOfStrings
  try {
    var tuning = utils.getObjectForKey( props.tunings, props.selectedTuningKey )
    numberOfStrings = tuning.midiNotes.length
  } catch ( e ) {
    numberOfStrings = 1
  }

  // set up x and y pos
  var x = props.fretboardNutWidth + props.fretboardOpenNoteWidth + props.fretboardFretWidth
  var height = numberOfStrings * props.fretboardStringHeight
  var translate = `translate( ${ x }, 0 )`

  // dummy array so I can use Array.map below
  var frets = new Array( props.fretboardNumberOfNotes ).fill( 0 )

  return (
    <g transform={ translate } className="frets">
      {
        frets.map(( note, index ) => {
          var tempProps =  { x:props.fretboardFretWidth * index, height:height, width:2 }

          return (
            <FretboardFret key={ index } { ...tempProps }/>
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
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardFretWidth: state.fretboardFretWidth
  }
})( FretboardFrets )
