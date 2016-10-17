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

export var numberOfCustomTuningStringsReducer = ( state = 7, action ) => {

  if ( action.type == actions.INCREMENT_CUSTOM_TUNING_STRINGS ) {
    return state + 1
  }

  if ( action.type == actions.DECREMENT_CUSTOM_TUNING_STRINGS ) {
    if ( state - 1 > 0 ) {
      return state - 1
    }
  }

  return state
}

export var changeCustomTuningNoteReducer = ( state = [], action ) => {

  if ( action.type == actions.INCREMENT_CUSTOM_TUNING_DATA ) {

    // duplicate state object
    var newState = Object.assign([], state);

    // find custom tuning
    var customTuning = utils.getObjectForKey( newState, "custom")

    if( customTuning ) {
      // get highest not in tuning to use as new note
      var newMidiNote = customTuning.midiNotes[ customTuning.midiNotes.length - 1 ]

      // make 5 notes higher
      if(newMidiNote + 5 < utils.notesNameTable.length ) {
        newMidiNote += 5
      }
      
      // Add new note name
      var newNoteName = "," + utils.getNoteNameFromMIDINumber( newMidiNote )
      customTuning.notes = customTuning.notes + newNoteName

      // update midi notes
      customTuning.midiNotes.push(newMidiNote)
    }

    return newState
  }

  if ( action.type == actions.DECREMENT_CUSTOM_TUNING_DATA ) {

    // duplicate state object
    var newState = Object.assign([], state);

    // find custom tuning
    var customTuning = utils.getObjectForKey( newState, "custom")

    if( customTuning ) {

      // return if not enough notes
      if ( customTuning.midiNotes.length < 2 ) {
        return newState
      }

      // remove last note
      var notes = customTuning.notes.split(',')
      notes.pop()
      customTuning.notes = notes.toString()

      // remove last midi notes
      customTuning.midiNotes.pop()
    }

    return newState
  }

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
  numberOfCustomTuningStrings: numberOfCustomTuningStringsReducer,
  numberOfNotesOnFretboard: (state = {}) => state,
  selectedNotesForScale: (state = {}) => state,
  selectedNotesForChord: (state = {}) => state,
  scales: (state = {}) => state,
  tunings: changeCustomTuningNoteReducer,
  chords: (state = {}) => state
})
