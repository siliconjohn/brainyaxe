import React from 'react'
import { connect } from 'react-redux'
import FretboardNote from 'FretboardNote'
var utils = require('utils')

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

  let result = []
  let keyCounter = 1

  // create open string's notes
  for( let i = 0; i < numberOfStrings; i++ ) {
    let midiNote = tuning.midiNotes[ i ]
    let isNoteInScale = utils.getNoteInArray( midiNote, selectedNotesForScale )
    let isNoteInChord = utils.getNoteInArray( midiNote, selectedNotesForChord )

    if ( !isNoteInScale && !isNoteInChord) {
      continue;
    }

    let key = keyCounter++

    // calculate tempProps
    let noteY = props.fretboardStringHeight * i
    let noteName = utils.getNoteNameFromMIDINumber( midiNote )
    let scaleDegree = scaleDegrees[ selectedNotesForScale.indexOf( noteName )]
    let chordDegree = chordDegrees[ selectedNotesForChord.indexOf( noteName )]

    let tempProps = { parentFretX:0, parentFretY:noteY, parentFretWidth:props.fretboardOpenNoteWidth, scaleNote:isNoteInScale,
                     chordNote:isNoteInChord, midiNote:midiNote, parentFretHeight:props.fretboardStringHeight,
                     noteName:noteName, scaleDegree: scaleDegree, chordDegree: chordDegree }

    result.push ( <FretboardNote key={ key } { ...tempProps }/> )
  }

  // add the fretboard's notes
  for(let i = 0; i < numberOfStrings; i++ ) {

    // calculate tempProps for this string
    let noteY = props.fretboardStringHeight * i
    let tempFretX = props.fretboardOpenNoteWidth + props.fretboardNutWidth
    let stringMidiNote = tuning.midiNotes[ i ]

    // for each fret on this string
    for( let a = 0; a < props.fretboardNumberOfNotes; a++ ) {

      let key = keyCounter++

      // calculate tempProps for this fret
      let width = props.fretboardFretWidth
      let midiNote = stringMidiNote + a + 1
      let noteName = utils.getNoteNameFromMIDINumber( midiNote )
      let isNoteInScale = utils.getNoteInArray( midiNote, selectedNotesForScale )
      let isNoteInChord = utils.getNoteInArray( midiNote, selectedNotesForChord )
      let scaleDegree = scaleDegrees[ selectedNotesForScale.indexOf( noteName )]
      let chordDegree = chordDegrees[ selectedNotesForChord.indexOf( noteName )]

      if ( isNoteInScale || isNoteInChord) {
        let tempProps = { parentFretX:tempFretX, parentFretY:noteY, parentFretWidth: width, parentFretHeight: props.fretboardStringHeight,
                          scaleNote:isNoteInScale, midiNote: midiNote, chordNote:isNoteInChord,
                          noteName:noteName,   scaleDegree: scaleDegree, chordDegree: chordDegree  }

        result.push ( <FretboardNote  key={ key } {...tempProps}/> )
      }
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
