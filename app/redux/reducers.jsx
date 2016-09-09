var redux = require('redux')
var actions = require('./actions')

export var tuningReducer = ( state = 'default', action ) => {

  if ( action.type == actions.CHANGE_TUNING ) {
    return action.key
  } else {
    return state
  }
}

export var scaleReducer = ( state = 'default', action ) => {

  if ( action.type == actions.CHANGE_SCALE ) {
    return action.key
  } else {
    return state
  }
}

export var chordReducer = ( state = 'default', action ) => {

  if ( action.type == actions.CHANGE_CHORD ) {
    return action.key
  } else {
    return state
  }
}

// all app reducers compined into one
export const appReducers = redux.combineReducers({
  selectedTuningKey:tuningReducer,
  selectedScaleKey:scaleReducer,
  selectedScaleNote: (state = {}) => state,
  selectedChordKey: chordReducer,
  selectedChordNote: (state = {}) => state,
  numberOfNotesOnFretboard: (state = {}) => state,
  selectedNotesForScale: (state = {}) => state,
  selectedNotesForChord: (state = {}) => state,
  scales: (state = {}) => state,
  tunings: (state = {}) => state,
  chords: (state = {}) => state
})
