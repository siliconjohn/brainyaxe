var React = require('react')
var { connect } = require('react-redux')
var utils = require('utils')
var FretboardNote = require('FretboardNote')

var FretboardNotes = ( props ) => {

  // get and calculate derived data
  try {
    var scale = utils.getObjectForKey( props.scales, props.selectedScaleKey )
    var chord = utils.getObjectForKey( props.chords, props.selectedChordKey )
    var tuning = utils.getObjectForKey( props.tunings, props.selectedTuningKey )
    var selectedNotesForScale = utils.getNotesForArray( scale, props.selectedScaleNote )
    var selectedNotesForChord = utils.getNotesForArray( chord, props.selectedChordNote )
    var scaleDegrees = scale.degrees.split( ',' )
    var chordDegrees = chord.degrees.split( ',' )
    var numberOfStrings = tuning.midiNotes.length
  } catch ( e ) {
    return ( <g></g> )
  }

  var result = []
  var keyCounter = 1

  // create open string's notes
  for( var i = 0; i < numberOfStrings; i++ ) {

    var key = keyCounter++

    // calculate tempProps
    var midiNote = tuning.midiNotes[ i ]
    var noteY = props.fretboardStringHeight * i
    var noteName = utils.getNoteNameFromMIDINumber( midiNote )
    var isNoteInScale = utils.isNoteInArray( midiNote, selectedNotesForScale )
    var isNoteInChord = utils.isNoteInArray( midiNote, selectedNotesForChord )

    var tempProps = { x:0, y:noteY, width:props.fretboardOpenNoteWidth, scaleNote:isNoteInScale,
                     chordNote:isNoteInChord, midiNote:midiNote, height:props.fretboardStringHeight,
                     note:noteName, isOpenString:true }

    result.push ( <FretboardNote key={ key } { ...tempProps }/> )
  }

  // add the fretboard's notes
  for(var i = 0; i < numberOfStrings; i++ ) {

    // calculate tempProps for this string
    var noteY = props.fretboardStringHeight * i
    var tempFretX = props.fretboardOpenNoteWidth + props.fretboardNutWidth
    var stringMidiNote = tuning.midiNotes[ i ]

    // for each fret on this string
    for( var a = 0; a < props.fretboardNumberOfNotes; a++ ) {

      key = keyCounter++

      // calculate tempProps for this fret
      var width = props.fretboardFretWidth - ( a == 1 ? 0 : 2 )
      var midiNote = stringMidiNote + a + 1
      var noteName = utils.getNoteNameFromMIDINumber( midiNote )
      var isNoteInScale = utils.isNoteInArray( midiNote, selectedNotesForScale )
      var isNoteInChord = utils.isNoteInArray( midiNote, selectedNotesForChord )
      var scaleDegree = scaleDegrees[ selectedNotesForScale.indexOf( noteName )]
      var chordDegree = chordDegrees[ selectedNotesForChord.indexOf( noteName )]

      var tempProps = { x:tempFretX, y:noteY, width: width, height: props.fretboardStringHeight,
                        scaleNote:isNoteInScale, midiNote: midiNote, chordNote:isNoteInChord,
                        note:noteName, isOpenString:false, scaleDegree: scaleDegree, chordDegree: chordDegree  }

      result.push ( <FretboardNote  key={ key } {...tempProps}/> )

      tempFretX += props.fretboardFretWidth
    }
  }

  return (
    <g className="notes">
      {
        result.map(( value, index ) => {
          return value

        })
      }
    </g>
  )
}

export default connect(( state ) => {
  return {
    scales: state.scales,
    chords: state.chords,
    tunings: state.tunings,
    selectedScaleKey: state.selectedScaleKey,
    selectedChordKey: state.selectedChordKey,
    selectedTuningKey: state.selectedTuningKey,
    selectedScaleNote: state.selectedScaleNote,
    selectedChordNote: state.selectedChordNote,
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardFretWidth: state.fretboardFretWidth
  }
})( FretboardNotes )
