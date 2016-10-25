var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var FretboardString = require('FretboardString')

var FretboardStrings = ( props ) => {

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
  var translate = `translate( ${ x }, 0 )`

  // setup vars used is positioning strings
  var halfStringHeight = props.fretboardStringHeight / 2
  var stringWidth = props.fretboardFretWidth * props.fretboardNumberOfNotes

  // dummy array so I can use Array.map below
  var strings = new Array( numberOfStrings ).fill( 0 )

  return (
    <g transform={ translate } className="strings">
      {
        strings.map(( note, index ) => {
          var tempProps = { x:0, y:(index * props.fretboardStringHeight ) + halfStringHeight,
                            width: stringWidth }

          return (
            <FretboardString key={ index } { ...tempProps }/>
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
})( FretboardStrings )
