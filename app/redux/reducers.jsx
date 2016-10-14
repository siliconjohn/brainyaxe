var redux = require('redux')
var actions = require('./actions')
var utils = require('../utils')

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

export var changeCustomTuningNoteReducer = ( state = [], action ) => {

  if ( action.type == actions.CHANGE_CUSTOM_TUNING_NOTE ) {

    // duplicate state object
    var newState = Object.assign([], state);

    // find custom tuning
    var customTuning = utils.getObjectForKey( newState, "custom")

    if( customTuning ) {
      // update note names
      var notes = customTuning.notes.split(',')
      notes[ action.stringKey ] = utils.getNoteNameFromMIDINumber( action.midiNote )
      customTuning.notes = notes.toString()

      // update midi notes
      customTuning.midiNotes [action.stringKey] = action.midiNote
    }

    return newState
  }

  return state
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
  tunings: changeCustomTuningNoteReducer,
  chords: (state = {}) => state
})
