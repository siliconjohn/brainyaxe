var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')

var FretboardHeader = ( props ) => {

  // get selected tuning
  try {
    var tuning = utils.getObjectForKey( props.tunings, props.selectedTuningKey )
  } catch ( e ) {
   return ( <div></div> )
  }

  // get selected scale
  try {
    var scale = utils.getObjectForKey( props.scales, props.selectedScaleKey )
  } catch (e) {
   return ( <div></div>)
  }
  var scaleText = scale.intervals.length > 0 ? scale.name + " Scale" : ""

  return (
    <div>
      <h5 className="fretboard-header-text float-left">{ scaleText }</h5>
      <h5 className="fretboard-header-text float-right">{ tuning.name } Tuning</h5>
    </div>
  )
}

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey,
    scales: state.scales,
    selectedScaleKey: state.selectedScaleKey,
  }
})( FretboardHeader )
