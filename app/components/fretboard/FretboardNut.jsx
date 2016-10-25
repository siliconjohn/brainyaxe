var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')

var FretboardNut = ( props ) => {

  // get the number of strings from the selected tuning
  var numberOfStrings
  try {
    var tuning = utils.getObjectForKey( props.tunings, props.selectedTuningKey )
    numberOfStrings = tuning.midiNotes.length
  } catch ( e ) {
    numberOfStrings = 1
  }

  // calculate the size
  var newProps = {}
  newProps.x = props.fretboardOpenNoteWidth
  newProps.y = 0
  newProps.height = props.fretboardStringHeight * numberOfStrings
  newProps.width = props.fretboardNutWidth

  return (
    <rect { ...newProps } className="nut"/>
  )
}

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth
  }
})( FretboardNut )
