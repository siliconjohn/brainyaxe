var React = require('react')

var FretboardOpenString = (props) => {
  var { y, width, key, note} = props
  var fontSize = 18

  return (
    <text x={width/2} y={y + (fontSize/2) -3} className="open-string-text" key={key}>{note}</text>
  )
}

module.exports = FretboardOpenString
