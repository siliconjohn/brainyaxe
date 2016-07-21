var React = require('react')

var FretboardString = (props) => {
  var { key, x, y } = props

  return (
    <line x1={x} y1={y} x2="100%" y2={y} className="string-line" key={"string-line-" + key}/>
  )
}

module.exports = FretboardString
