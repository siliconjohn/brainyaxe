var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var ChordChooserOption = require('ChordChooserOption')

export var ChordChooser = React.createClass({

  render: function() {
    var { dispatch, chords, selectedChordKey } = this.props

    return (
      <select value={ selectedChordKey } className="chord-select"
        onChange={ (e) => {
          dispatch( actions.changeChord( e.target.value ))
        }}>

        {
          chords.map(( chord, index ) => {
            var tempProps = { chordKey:chord.key, name:chord.name }

            return (
              <ChordChooserOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
})

export default connect(( state ) => {
  return {
    chords: state.chords,
    selectedChordKey: state.selectedChordKey
  }
})(ChordChooser)
