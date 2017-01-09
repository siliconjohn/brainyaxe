import React from 'react'
import { connect } from 'react-redux'
import FretboardNote from 'FretboardNote'
import SelectedTuningSelector from 'selectedTuning'
import SelectedScaleNotesSelector from 'selectedScaleNotes'
import SelectedScaleSelector from 'selectedScale'
import SelectedChordNotesSelector from 'selectedChordNotes'
import SelectedChordSelector from 'selectedChord'
var utils = require('utils')

var FretboardNotes = ( props ) => {
  let { fretboardStringHeight, fretboardNutWidth, selectedChordNotes,
    fretboardOpenNoteWidth, tuning, selectedScaleNotes, scales,
    chords, selectedScaleKey, selectedChordKey, fretboardFretWidth,
    fretboardNumberOfNotes, selectedScale, selectedChord } = props
  let numberOfStrings = tuning.midiNotes.length

  let result = []
  let keyCounter = 1
  var scaleDegrees = selectedScale.degrees.split( ',' )
  var chordDegrees = selectedChord.degrees.split( ',' )

  // create open string's notes
  for( let i = 0; i < numberOfStrings; i++ ) {
    let midiNote = tuning.midiNotes[ i ]
    let isNoteInScale = utils.getNoteInArray( midiNote, selectedScaleNotes )
    let isNoteInChord = utils.getNoteInArray( midiNote, selectedChordNotes )

    if ( !isNoteInScale && !isNoteInChord) {
      continue
    }

    let key = keyCounter++

    // calculate tempProps
    let noteY = fretboardStringHeight * i
    let noteName = utils.getNoteNameFromMIDINumber( midiNote )
    let scaleDegree = scaleDegrees[ selectedScaleNotes.indexOf( noteName )]
    let chordDegree = chordDegrees[ selectedChordNotes.indexOf( noteName )]

    let tempProps = { parentFretX:0, parentFretY:noteY, parentFretWidth:fretboardOpenNoteWidth, scaleNote:isNoteInScale,
      chordNote:isNoteInChord, midiNote:midiNote, parentFretHeight:fretboardStringHeight,
      noteName:noteName, scaleDegree: scaleDegree, chordDegree: chordDegree }

    result.push ( <FretboardNote key={ key } { ...tempProps }/> )
  }

  // add the fretboard's notes
  for(let i = 0; i < numberOfStrings; i++ ) {

    // calculate tempProps for this string
    let noteY = fretboardStringHeight * i
    let tempFretX = fretboardOpenNoteWidth + fretboardNutWidth
    let stringMidiNote = tuning.midiNotes[ i ]

    // for each fret on this string
    for( let a = 0; a < fretboardNumberOfNotes; a++ ) {

      let key = keyCounter++

      // calculate tempProps for this fret
      let width = fretboardFretWidth
      let midiNote = stringMidiNote + a + 1
      let noteName = utils.getNoteNameFromMIDINumber( midiNote )
      let isNoteInScale = utils.getNoteInArray( midiNote, selectedScaleNotes )
      let isNoteInChord = utils.getNoteInArray( midiNote, selectedChordNotes )
      let scaleDegree = scaleDegrees[ selectedScaleNotes.indexOf( noteName )]
      let chordDegree = chordDegrees[ selectedChordNotes.indexOf( noteName )]

      if ( isNoteInScale || isNoteInChord) {
        let tempProps = { parentFretX:tempFretX, parentFretY:noteY, parentFretWidth: width, parentFretHeight: fretboardStringHeight,
          scaleNote:isNoteInScale, midiNote: midiNote, chordNote:isNoteInChord,
          noteName:noteName,   scaleDegree: scaleDegree, chordDegree: chordDegree  }

        result.push ( <FretboardNote  key={ key } {...tempProps}/> )
      }
      tempFretX += fretboardFretWidth
    }
  }

  return (
    <g className="notes">
      {
        result.map(( value ) => {
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
    selectedScaleNote: state.selectedScaleNote,
    selectedChordNote: state.selectedChordNote,
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardNutWidth: state.fretboardNutWidth,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardFretWidth: state.fretboardFretWidth,
    tuning: SelectedTuningSelector( state ),
    selectedScale: SelectedScaleSelector( state ),
    selectedScaleNotes: SelectedScaleNotesSelector( state ),
    selectedChord: SelectedChordSelector( state ),
    selectedChordNotes: SelectedChordNotesSelector( state ),
  }
})( FretboardNotes )
