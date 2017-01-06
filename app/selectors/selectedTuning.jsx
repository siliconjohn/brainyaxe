import { createSelector } from 'Reselect'
import { getObjectForKey } from 'utils'

const tuningsSelector = state => state.tunings
const tuningKeySelector = state => state.selectedTuningKey

const selectedTuning = ( tunings, tuningKey ) => {
  return getObjectForKey( tunings, tuningKey )
}

export default createSelector(
  tuningsSelector,
  tuningKeySelector,
  selectedTuning
)
