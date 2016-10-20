var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var utils = require('utils')
var ScaleNoteChooserOption = require('ScaleNoteChooserOption')

export var ScaleNoteChooser = React.createClass({

  render: function() {
    var { dispatch, selectedScaleNote } = this.props

    return (
      <select value={ selectedScaleNote } className="scale-note-select"
        onChange={ (e) => {
          dispatch( actions.changeScaleNote( e.target.value ))
        }}>

        {
          utils.twelveNotesTable.map(( note, index ) => {
            var tempProps = { note:note }

            return (
              <ScaleNoteChooserOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
})

export default connect(( state ) => {
  return {
    selectedScaleNote: state.selectedScaleNote
  }
})(ScaleNoteChooser)
