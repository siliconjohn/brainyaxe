var React = require('react')

var ChordOption = ( props ) => {

  return (
    <option value={ props.chordKey }>{ props.name }</option>
  )
}

module.exports = ChordOption
