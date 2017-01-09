import React from 'react'
import { connect } from 'react-redux'
import FretboardIntervalChooser from 'FretboardIntervalChooser'
import SelectedTuningSelector from 'selectedTuning'
import FretboardThemeChooser from 'FretboardThemeChooser'
import { getObjectForKey } from 'utils'

var FretboardHeader = ( props ) => {
  let { tuning,  scales, selectedScaleKey,
        selectedChordKey, chords } = props
  let scaleOrChordText = ""

  // get selected scale
  if( selectedScaleKey != 'default' ){

    try {
      var scale = getObjectForKey( scales, selectedScaleKey )
    } catch (e) {
      return ( <div></div>)
    }

    scaleOrChordText = scale.intervals.length > 0 ? scale.name + " Scale" : ""
  } else {
    if( selectedChordKey != 'default' ){

      try {
        var chord = getObjectForKey( chords, selectedChordKey )
      } catch (e) {
        return ( <div></div>)
      }

      scaleOrChordText = chord.intervals.length > 0 ? chord.name + " Chord" : ""
    }
  }

  return (
    <div className="title-bar shadow-small">
      <div className="title-bar-left">{ scaleOrChordText }</div>
      <div className="title-bar-left">
        <FretboardIntervalChooser/>
      </div>
      <div className="title-bar-left">
        <FretboardThemeChooser/>
      </div>
      <div className="title-bar-right">
        { tuning.name } Tuning
      </div>
    </div>
  )
}

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    scales: state.scales,
    selectedScaleKey: state.selectedScaleKey,
    chords: state.chords,
    selectedChordKey: state.selectedChordKey,
    tuning: SelectedTuningSelector( state )
  }
})( FretboardHeader )
