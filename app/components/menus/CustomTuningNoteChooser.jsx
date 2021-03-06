var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var utils = require('utils')
var CustomTuningNoteChooserOption = require('CustomTuningNoteChooserOption')

export var CustomTuningNoteChooser = React.createClass({

  render: function() {
    var { dispatch, stringNumber, tunings, showCustomTuningMidiNote, references } = this.props
    var customTuning = utils.getObjectForKey( tunings, "custom")

    try {
      var selectedMidiNote = customTuning.midiNotes[ stringNumber ].toString()
    } catch (e) {
      return (<div></div>)
    }

    return (
      <select value={ selectedMidiNote } className="custom-tuning-select"
        onChange={ (e) => {
          dispatch( actions.changeCustomTuningNote( stringNumber, parseInt( e.target.value )))
        }}>

        {
          utils.noteNamesTable.map(( note, index ) => {
            var tempProps = { note:note, index:index, references:references,
              showMidiNote: showCustomTuningMidiNote }

            return (
              <CustomTuningNoteChooserOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
})

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    references: state.references,
    showCustomTuningMidiNote: state.showCustomTuningMidiNote
  }
})(CustomTuningNoteChooser)
