var React = require('react')

var FretboardOpenNote = (props) => {
  var { x, y, width, height, midiNote, key, note} = props

  return (
    <rect x={x} y={y} width={width} height={height} className="open-string-note" key={key}/>
  )
}

module.exports = FretboardOpenNote
