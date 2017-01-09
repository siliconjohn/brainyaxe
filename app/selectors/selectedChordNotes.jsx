import { createSelector } from 'reselect'
import { getNotesForArray, getObjectForKey } from 'utils'

const chordsSelector = state => state.chords
const selectedChordKeySelector = state => state.selectedChordKey
const selectedChordNoteSelector = state => state.selectedChordNote

const selectedChordNotes = ( chords, chordKey, chordNote ) => {
  let chord = getObjectForKey( chords, chordKey )
  return getNotesForArray( chord, chordNote )
}

export default createSelector(
  chordsSelector,
  selectedChordKeySelector,
  selectedChordNoteSelector,
  selectedChordNotes
)
