var React = require('react')

var FretboardBackground = (props) => {
  var { x, y ,width, height } = props

  return (
    <rect x={x} y={y} width={width} height={height} className="fretboard-bg"/>
  )
}

module.exports = FretboardBackground
// <g>
//   <rect x={x} y={y} width={width} height={height} className="fretboard-bg"/>
//   <image href="/maple.jpg" x={x} y={y} height="225px" width="300px"/>
// </g>
