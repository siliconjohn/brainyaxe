const React = require('react')
const { connect } = require('react-redux')
const actions = require('../../redux/actions')
const { notesNameTable } = require('../../utils')

export var CustomTuningChooser = React.createClass({

  render: function() {
    var { dispatch, keyid } = this.props

    return (
      <select className="custom-tuning-select" key={keyid}
        onChange={ (e) => dispatch( actions.changeChord( "chord2" ))}>

        { notesNameTable.map(( note, index ) => (
          <option key={ index + 1 } value={ note }>{ note } - { index + 1 }</option>))
        }

      </select>
    )
  }
});

export default connect((state) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey
  }
})(CustomTuningChooser)
