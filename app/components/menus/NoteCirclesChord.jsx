var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var NoteCircle = require('NoteCircle')

var NoteCirclesChord = (props) => {

  var { chords, selectedChordKey, selectedChordNote } = props

  var chord = utils.getObjectForKey( chords, selectedChordKey )
  var chordDegrees = chord.degrees.split( ',' )
  var selectedNotesForChord = utils.getNotesForArray( utils.getObjectForKey( chords,
                                    selectedChordKey ), selectedChordNote )

  return (
    <div className="note-circles">
     {
       selectedNotesForChord.map(( note, index ) => {
         var tempProps = { noteName:note, interval:chordDegrees[ index ],
           colorClassName:"note-circle-yellow-bg" }
         return (
           <NoteCircle key={ index } { ...tempProps }/>
         )
       })
     }
    </div>
  )
}

export default connect(( state ) => {
  return {
    chords: state.chords,
    selectedChordKey: state.selectedChordKey,
    selectedChordNote: state.selectedChordNote
  }
})( NoteCirclesChord )
