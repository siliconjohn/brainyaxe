const React = require('react')
const { notesNameTable } = require('../../utils')
const CustomTuningOption = require('CustomTuningOption')

var CustomTuningChooser = ( props ) => {
  var { key } = props

  var renderNoteOptions = () => {
    return notesNameTable.map(( note, index ) => {

      var props = { midiNote: index + 1, note: note }

      return (
        <CustomTuningOption { ...props }/>
      )
    })
  }

  return (
    <select className="custom-tuning-select" key={ key }>
      { renderNoteOptions() }
    </select>
  )
}

module.exports = CustomTuningChooser
