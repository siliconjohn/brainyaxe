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

export var scaleNoteReducer = ( state = 'E', action ) => {

  if ( action.type == actions.CHANGE_SCALE_NOTE ) {
    return action.note
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

export var chordNoteReducer = ( state = 'E', action ) => {

  if ( action.type == actions.CHANGE_CHORD_NOTE ) {
    return action.note
  } else {
    return state
  }
}

// all app reducers compined into one
export const appReducers = redux.combineReducers({
  selectedTuningKey:tuningReducer,
  selectedScaleKey:scaleReducer,
  selectedScaleNote: scaleNoteReducer,
  selectedChordKey: chordReducer,
  selectedChordNote: chordNoteReducer,
  numberOfNotesOnFretboard: (state = {}) => state,
  selectedNotesForScale: (state = {}) => state,
  selectedNotesForChord: (state = {}) => state,
  scales: (state = {}) => state,
  tunings: (state = {}) => state,
  chords: (state = {}) => state
})
