var React = require('react')
var utils = require('utils')

var CustomTuningNoteChooserOption = ( props ) => {

  // setup midi note string
  var midiNote = ""
  if ( props.showMidiNote == true) {
    midiNote = " - " + props.index
  }

  // get the reference message if there is one
  var refMessage = ""
  var ref = utils.getObjectForKey( props.references, props.index)
  if ( ref) {
    refMessage = " - " + ref.message
  }

  return (
    <option value={ props.index }>{ props.note }{ midiNote }{refMessage}</option>
  )
}

module.exports = CustomTuningNoteChooserOption
