var React = require('react')

var CustomTuningOption = ( props ) => {

  var midiNote = ""

  if ( props.showMidiNote == true) {
    midiNote = " - " + props.index
  }

  return (
    <option value={ props.index }>{ props.note }{ midiNote }</option>
  )
}

module.exports = CustomTuningOption
