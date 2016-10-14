export const CHANGE_TUNING = 'CHANGE_TUNING'

export var changeTuning = ( key ) => {
  return {
    type: CHANGE_TUNING,
    key
  }
}

export const CHANGE_SCALE = 'CHANGE_SCALE'

export var changeScale = ( key ) => {
  return {
    type: CHANGE_SCALE,
    key
  }
}

export const CHANGE_SCALE_NOTE = 'CHANGE_SCALE_NOTE'

export var changeScaleNote = ( note ) => {
  return {
    type: CHANGE_SCALE_NOTE,
    note
  }
}

export const CHANGE_CHORD = 'CHANGE_CHORD'

export var changeChord = ( key ) => {
  return {
    type: CHANGE_CHORD,
    key
  }
}

export const CHANGE_CHORD_NOTE = 'CHANGE_CHORD_NOTE'

export var changeChordNote = ( note ) => {
  return {
    type: CHANGE_CHORD_NOTE,
    note
  }
}

export const CHANGE_CUSTOM_TUNING_NOTE = 'CHANGE_CUSTOM_TUNING_NOTE'

export var changeCustomTuningNote = ( stringKey, midiNote ) => {
  return {
    type: CHANGE_CUSTOM_TUNING_NOTE,
    stringKey,
    midiNote
  }
}
