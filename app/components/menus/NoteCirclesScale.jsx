var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var NoteCircle = require('NoteCircle')

var NoteCirclesScale = (props) => {

  var { scales, selectedScaleKey, selectedScaleNote } = props

  var scale = utils.getObjectForKey( scales, selectedScaleKey )
  var scaleDegrees = scale.degrees.split( ',' )
  var selectedNotesForScale = utils.getNotesForArray( utils.getObjectForKey( scales,
                                    selectedScaleKey ), selectedScaleNote )

  return (
    <div className="note-circles">
     {
       selectedNotesForScale.map(( note, index ) => {
         var tempProps = { noteName:note, interval:scaleDegrees[ index ] }
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
    scales: state.scales,
    selectedScaleKey: state.selectedScaleKey,
    selectedScaleNote: state.selectedScaleNote
  }
})( NoteCirclesScale )
