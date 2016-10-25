var React = require('react')

var FretboardFret = ( props ) => {

  var { x, height, width } = props

  return (
    <rect x={ x } y="0" width={ width } height={ height }  className="fret"/>
  )
}

module.exports = FretboardFret
