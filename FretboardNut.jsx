var React = require('react')

var FretboardNut = (props) => {
  var {x,height,width} = props

  return (
    <rect x={x} y="0" width={width} height={height} className="nut" fill="white"/>
  )
}

module.exports = FretboardNut
