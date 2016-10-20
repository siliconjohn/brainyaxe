var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var utils = require('utils')
var ChordNoteChooserOption = require('ChordNoteChooserOption')

export var ChordNoteChooser = React.createClass({

  render: function() {
    var { dispatch, selectedChordNote } = this.props

    return (
      <select value={ selectedChordNote } className="chord-note-select"
        onChange={ (e) => {
          dispatch( actions.changeChordNote( e.target.value ))
        }}>

        {
          utils.twelveNotesTable.map(( note, index ) => {
            var tempProps = { note:note }

            return (
              <ChordNoteChooserOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
})

export default connect(( state ) => {
  return {
    selectedChordNote: state.selectedChordNote
  }
})(ChordNoteChooser)
