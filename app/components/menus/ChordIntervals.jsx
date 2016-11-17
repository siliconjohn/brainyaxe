var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')

var ChordIntervals = (props) => {

  var { chords, selectedChordKey } = props

  var selectedChord = utils.getObjectForKey( chords, selectedChordKey )
  if( selectedChord == undefined ) {
    return ( <div></div> )
  }

  return (
    <p className="degrees text-center">{ selectedChord.degrees }</p>
  )
}

export default connect(( state ) => {
  return {
    chords: state.chords,
    selectedChordKey: state.selectedChordKey
  }
})(ChordIntervals)
