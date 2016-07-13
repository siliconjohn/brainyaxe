var React = require('react')

var StringLine = (props) => {
  var { key, x, y } = props

  return (
    <line x1={x} y1={y} x2="100%" y2={y} stroke="white" key={"string-line-" + key}/>
  )
}

module.exports = StringLine
