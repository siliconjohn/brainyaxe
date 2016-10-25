var React = require('react')

var FretboardString = ( props ) => {

  var { x, y, width } = props

  return (
    <line x1={ x } y1={ y } x2={ width } y2={ y } className="string"/>
  )
}

module.exports = FretboardString
