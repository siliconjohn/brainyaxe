import { createSelector } from 'reselect'
import { getNotesForArray, getObjectForKey } from 'utils'

const scalesSelector = state => state.scales
const selectedScaleKeySelector = state => state.selectedScaleKey
const selectedScaleNoteSelector = state => state.selectedScaleNote

const selectedScaleNotes = ( scales, scaleKey, scaleNote ) => {
  let scale = getObjectForKey( scales, scaleKey )
  return getNotesForArray( scale, scaleNote )
}

export default createSelector(
  scalesSelector,
  selectedScaleKeySelector,
  selectedScaleNoteSelector,
  selectedScaleNotes
)
