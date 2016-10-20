var redux = require('redux')
var actions = require('actions')
var utils = require('utils')

export var tuningReducer = ( state = 'default', action ) => {

  if ( action.type == actions.CHANGE_TUNING ) {
    return action.key
  }

  if ( action.type == actions.INCREMENT_CUSTOM_TUNING_STRINGS ) {
    return "custom"
  }

  if ( action.type == actions.DECREMENT_CUSTOM_TUNING_STRINGS ) {
    return "custom"
  }

  if ( action.type == actions.CHANGE_CUSTOM_TUNING_NOTE ) {
    return "custom"
  }

  return state
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

export var showCustomTuningMidiNoteReducer = ( state = false, action) => {

  if ( action.type == actions.TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE ) {
    return !state
  } else {
    return state
  }
}

export var numberOfCustomTuningStringsReducer = ( state = 6, action ) => {

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

export var customTuningReducer = ( state = [], action ) => {

  if ( action.type == actions.INCREMENT_CUSTOM_TUNING_STRINGS ) {

    // duplicate state object
    var newState = Object.assign([], state);

    // find custom tuning
    var customTuning = utils.getObjectForKey( newState, "custom")

    if( customTuning ) {
      // get highest not in tuning to use as new note
      var newMidiNote = customTuning.midiNotes[ 0 ]

      // make 5 notes higher
      if(newMidiNote + 5 < utils.notesNameTable.length ) {
        newMidiNote += 5
      }

      // Add new note name
      var newNoteName = "," + utils.getNoteNameFromMIDINumber( newMidiNote )
      customTuning.notes = customTuning.notes + newNoteName

      // update midi notes
      customTuning.midiNotes.unshift(newMidiNote)
    }

    return newState
  }

  if ( action.type == actions.DECREMENT_CUSTOM_TUNING_STRINGS ) {

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
      customTuning.midiNotes.shift()
    }

    return newState
  }

  if ( action.type == actions.CHANGE_CUSTOM_TUNING_NOTE ) {

    // duplicate state object
    var newState = Object.assign([], state);

    // find custom tuning
    var customTuning = utils.getObjectForKey( newState, "custom")

    if( customTuning ) {
      try {
        // update note names
        var notes = customTuning.notes.split(',')
        notes[ notes.length - 1 - action.stringKey ] = utils.getNoteNameFromMIDINumber( action.midiNote )
        customTuning.notes = notes.toString()
        // update midi notes
        customTuning.midiNotes [action.stringKey] = action.midiNote
      } catch (e) {
        return state
      }
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
  tunings: customTuningReducer,
  numberOfCustomTuningStrings: numberOfCustomTuningStringsReducer,
  showCustomTuningMidiNote: showCustomTuningMidiNoteReducer,
  numberOfNotesOnFretboard: (state = {}) => state,
  selectedNotesForScale: (state = {}) => state,
  selectedNotesForChord: (state = {}) => state,
  scales: (state = {}) => state,
  chords: (state = {}) => state,
  references : (state = {}) => state
})
