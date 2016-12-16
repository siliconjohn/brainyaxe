import React from 'react'
import { connect } from 'react-redux'
var utils = require('utils')

var FretboardHeader = ( props ) => {
  let { tunings, selectedTuningKey, scales, selectedScaleKey,
        selectedChordKey, chords } = props

  // get selected tuning
  try {
    var tuning = utils.getObjectForKey( tunings, selectedTuningKey )
  } catch ( e ) {
   return ( <div></div> )
  }

  let scaleOrChordText = ""

  // get selected scale
  if( selectedScaleKey != 'default' ){

    try {
      var scale = utils.getObjectForKey( scales, selectedScaleKey )
    } catch (e) {
     return ( <div></div>)
    }

    scaleOrChordText = scale.intervals.length > 0 ? scale.name + " Scale" : ""
  } else {
    if( selectedChordKey != 'default' ){

      try {
        var chord = utils.getObjectForKey( chords, selectedChordKey )
      } catch (e) {
       return ( <div></div>)
      }

      scaleOrChordText = chord.intervals.length > 0 ? chord.name + " Chord" : ""
    }
  }

  return (
    <div className="title-bar shadow-small">
      <div className="title-bar-left">{ scaleOrChordText }</div>
      <div className="title-bar-right">{ tuning.name } Tuning</div>
    </div>
  )
}

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey,
    scales: state.scales,
    selectedScaleKey: state.selectedScaleKey,
    chords: state.chords,
    selectedChordKey: state.selectedChordKey,
  }
})( FretboardHeader )
