var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var FretboardFretNumber = require('FretboardFretNumber')

var FretboardFretNumbers = ( props ) => {

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
  var y = numberOfStrings * props.fretboardStringHeight
  var translate = `translate( ${ x }, ${ y } )`

  // dummy array so I can use Array.map below
  var notes = new Array( props.fretboardNumberOfNotes ).fill( 0 )

  return (
    <g transform={ translate } className="fret-numbers">
      {
        notes.map(( note, index ) => {
          var tempProps =  { x:props.fretboardFretWidth * index, y:20, number:index + 1,
                             fretWidth:props.fretboardFretWidth }

          return (
            <FretboardFretNumber key={ index } { ...tempProps }/>
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
})( FretboardFretNumbers )
