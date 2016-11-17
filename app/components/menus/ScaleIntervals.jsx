var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')

var ScaleIntervals = (props) => {

  var { scales, selectedScaleKey } = props

  var selectedScale = utils.getObjectForKey( scales, selectedScaleKey )
  if( selectedScale == undefined ) {
    return ( <div></div> )
  }

  return (
    <p className="degrees text-center">{ selectedScale.degrees }</p>
  )
}

export default connect(( state ) => {
  return {
    scales: state.scales,
    selectedScaleKey: state.selectedScaleKey
  }
})(ScaleIntervals)
