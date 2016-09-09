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

export const CHANGE_CHORD = 'CHANGE_CHORD'

export var changeChord = ( key ) => {
  return {
    type: CHANGE_CHORD,
    key
  }
}
