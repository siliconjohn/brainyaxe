var React = require('react')

var FretboardOpenString = (props) => {
  var { y, width, key, note} = props
  var textYOffset = 6
  var textXOffset = 6

  return (
    <text x={width / 2 - textXOffset} y={ y + textYOffset} className="open-string-text" key={key}>{note}</text>
  )
}

module.exports = FretboardOpenString
