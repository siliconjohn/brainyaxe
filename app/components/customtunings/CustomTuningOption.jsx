const React = require('react')

var CustomTuningOption = ( props ) => {
  var { midiNote, note } = props

  return (
    <option key={ midiNote } value={ note }>{ note } - { midiNote }</option>
  )
}

module.exports = CustomTuningOption
