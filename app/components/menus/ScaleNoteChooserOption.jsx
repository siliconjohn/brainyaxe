var React = require('react')

var ScaleNoteChooserOption = ( props ) => {

  return (
    <option value={ props.note }>{ props.note }</option>
  )
}

module.exports = ScaleNoteChooserOption
