var React = require('react')

var ChordNoteChooserOption = ( props ) => {

  return (
    <option className="chord-note-chooser-option" value={ props.note }>
      { props.note }
    </option>
  )
}

module.exports = ChordNoteChooserOption
