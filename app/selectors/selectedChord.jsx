import { createSelector } from 'reselect'
import { getObjectForKey } from 'utils'

const chordsSelector = state => state.chords
const selectedChordKeySelector = state => state.selectedChordKey

const selectedChordNotes = ( chords, chordKey ) => {
  return getObjectForKey( chords, chordKey )
}

export default createSelector(
  chordsSelector,
  selectedChordKeySelector,
  selectedChordNotes
)
