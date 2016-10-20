var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var utils = require('utils')
var ScaleNoteOption = require('ScaleNoteOption')

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
              <ScaleNoteOption key={ index } { ...tempProps }/>
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
