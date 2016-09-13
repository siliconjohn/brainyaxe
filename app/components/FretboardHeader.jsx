var React = require('react')

var FretboardHeader = ( props ) => {
  var { scale, tuning } = props

  var scaleText = scale.intervals.length > 0 ? scale.name + " Scale" : ""

  return (
    <div>
      <h5 className="fb-header-text float-left">{ scaleText }</h5>
      <h5 className="fb-header-text float-right">{ tuning.name } Tuning</h5>
    </div>
  )
}

module.exports = FretboardHeader
