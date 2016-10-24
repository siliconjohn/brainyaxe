var React = require('react')

var ScaleNoteChooserOption = ( props ) => {

  return (
    <option className="scale-note-chooser-option"  value={ props.note }>{ props.note }</option>
  )
}

module.exports = ScaleNoteChooserOption
