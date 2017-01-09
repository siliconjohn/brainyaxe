import { createSelector } from 'reselect'
import { getObjectForKey } from 'utils'

const scalesSelector = state => state.scales
const selectedScaleKeySelector = state => state.selectedScaleKey

const selectedScaleNotes = ( scales, scaleKey ) => {
  return getObjectForKey( scales, scaleKey )
}

export default createSelector(
  scalesSelector,
  selectedScaleKeySelector,
  selectedScaleNotes
)
