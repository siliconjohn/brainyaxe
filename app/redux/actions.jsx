import ReactGA from 'react-ga'

export const CHANGE_TUNING = 'CHANGE_TUNING'

export var changeTuning = ( key ) => {

  ReactGA.event({
    category: 'Tuning',
    action: "Changed tuning to " + key,
  })

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

export const INCREMENT_CUSTOM_TUNING_STRINGS = 'INCREMENT_CUSTOM_TUNING_STRINGS'

export var incrementCustomTuningStrings = () => {
  return {
    type: INCREMENT_CUSTOM_TUNING_STRINGS
  }
}

export const DECREMENT_CUSTOM_TUNING_STRINGS = 'DECREMENT_CUSTOM_TUNING_STRINGS'

export var decrementCustomTuningStrings = () => {
  return {
    type: DECREMENT_CUSTOM_TUNING_STRINGS
  }
}

export const TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE = 'TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE'

export var toggleShowCustomTuningMidiNote = () => {
  return {
    type: TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE
  }
}

export const CHANGE_FRETBOARD_NUMBER_OF_NOTES = 'CHANGE_FRETBOARD_NUMBER_OF_NOTES'

export var changeFretboardNumberOfNotes = ( numberOfNotes ) => {
  return {
    type: CHANGE_FRETBOARD_NUMBER_OF_NOTES,
    numberOfNotes
  }
}

export const FRETBOARD_STRING_HEIGHT = 'FRETBOARD_STRING_HEIGHT'

export var changeFretboardStringHeight = ( height ) => {
  return {
    type: FRETBOARD_STRING_HEIGHT,
    height
  }
}

export const FRETBOARD_FRET_WIDTH = 'FRETBOARD_FRET_WIDTH'

export var changeFretboardFretWidth = ( width ) => {
  return {
    type: FRETBOARD_FRET_WIDTH,
    width
  }
}

export const CHANGE_FRETBOARD_THEME = 'CHANGE_FRETBOARD_THEME'

export var changeFretboardTheme = ( themeName ) => {
  return {
    type: CHANGE_FRETBOARD_THEME,
    themeName
  }
}

export const CHANGE_FRETBOARD_HIGHLIGHT = 'CHANGE_FRETBOARD_HIGHLIGHT'

export var changeFretboardHighlight = ( highlight ) => {
  return {
    type: CHANGE_FRETBOARD_HIGHLIGHT,
    highlight
  }
}

export const TOGGLE_FRETBOARD_SHOW_DEGREE = 'TOGGLE_FRETBOARD_SHOW_DEGREE'

export var toggleFretboardShowDegree = () => {
  return {
    type: TOGGLE_FRETBOARD_SHOW_DEGREE
  }
}
