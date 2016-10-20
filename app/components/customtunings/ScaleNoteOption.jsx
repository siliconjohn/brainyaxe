var React = require('react')

var ScaleNoteOption = ( props ) => {

  return (
    <option value={ props.note }>{ props.note }</option>
  )
}

module.exports = ScaleNoteOption
