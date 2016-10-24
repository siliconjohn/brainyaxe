var React = require('react')

var ChordChooserOption = ( props ) => {

  return (
    <option className="chord-chooser-option" value={ props.chordKey }>{ props.name }</option>
  )
}

module.exports = ChordChooserOption
