var React = require('react')

var ChordChooserOption = ( props ) => {

  return (
    <option value={ props.chordKey }>{ props.name }</option>
  )
}

module.exports = ChordChooserOption
