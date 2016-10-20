var React = require('react')

var ChordNoteChooserOption = ( props ) => {

  return (
    <option value={ props.note }>{ props.note }</option>
  )
}

module.exports = ChordNoteChooserOption
