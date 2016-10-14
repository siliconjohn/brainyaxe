const React = require('react')
const { connect } = require('react-redux')
const actions = require('../../redux/actions')
const utils = require('../../utils')

export var CustomTuningChooser = React.createClass({

  render: function() {
    var { dispatch, keyid, tunings } = this.props
    var customTuning = utils.getObjectForKey( tunings, "custom")
    var selectedMidiNote = customTuning.midiNotes[keyid].toString()
   
    return (
      <select value={ selectedMidiNote } className="custom-tuning-select" key={keyid}
        onChange={ (e) => {
          dispatch( actions.changeCustomTuningNote( keyid, parseInt(e.target.value)))
          dispatch( actions.changeTuning( "custom" ))
        }}>

        { utils.notesNameTable.map(( note, index ) => (
          <option key={ index } value={ index }>{ note } - { index }</option>))
        }

      </select>
    )
  }
});

export default connect((state) => {
  return {
    tunings: state.tunings
  }
})(CustomTuningChooser)
