var React = require('react')

var FretboardBackground = (props) => {
  var { x, y ,width, height } = props

  return (
    <rect x={x} y={y} width={width} height={height} className="fretboard-bg"/>
  )
}

module.exports = FretboardBackground
