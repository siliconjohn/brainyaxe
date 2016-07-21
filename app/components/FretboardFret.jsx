var React = require('react')

var FretboardFret = (props) => {
  var {x, height, width, key} = props

  return (<rect x={x} y="0" width={width} height={height} key={"fret-" + key} className="fret"/>)
}

module.exports = FretboardFret
