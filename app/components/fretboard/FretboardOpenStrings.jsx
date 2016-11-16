var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var FretboardOpenString = require('FretboardOpenString')

var FretboardOpenStrings = ( props ) => {

  // get the number of strings from the selected tuning
  try {
    var tuning = utils.getObjectForKey( props.tunings, props.selectedTuningKey )
    var numberOfStrings = tuning.midiNotes.length
  } catch ( e ) {
    return ( <g></g> )
  }

  var halfStringHeight = props.fretboardStringHeight / 2

  // dummy array so I can use Array.map below
  var strings = new Array( numberOfStrings ).fill( 0 )

  return (
    <g className="open-strings">
      {
        strings.map(( value, index ) => {
          var tempProps =  { y:props.fretboardStringHeight * index + halfStringHeight,
                            width: props.fretboardOpenNoteWidth, midiNote: tuning.midiNotes[ index ],
                            note: utils.getNoteNameFromMIDINumber( tuning.midiNotes[ index ])}

          return (
            <FretboardOpenString key={ index } { ...tempProps }/>
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
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth
  }
})( FretboardOpenStrings )
