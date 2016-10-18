var React = require('react')
var { connect } = require('react-redux')
var actions = require('../../redux/actions')
var utils = require('../../utils')
var CustomTuningOption = require('CustomTuningOption')

export var CustomTuningChooser = React.createClass({

  render: function() {
    var { dispatch, stringNumber, tunings, showCustomTuningMidiNote } = this.props
    var customTuning = utils.getObjectForKey( tunings, "custom")
    var selectedMidiNote = customTuning.midiNotes[ stringNumber ].toString()

    return (
      <select value={ selectedMidiNote } className="custom-tuning-select"
        onChange={ (e) => {
          dispatch( actions.changeCustomTuningNote( stringNumber, parseInt( e.target.value )))
        }}>

        {
          utils.notesNameTable.map(( note, index ) => {
            var tempProps = { note:note, index:index, showMidiNote: showCustomTuningMidiNote }

            return (
              <CustomTuningOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
});

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    showCustomTuningMidiNote: state.showCustomTuningMidiNote
  }
})(CustomTuningChooser)
