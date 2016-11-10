var React = require('react')
var expect = require('expect')
var actions = require('actions')

describe( "Redux Actions", () => {

  it( "Should change the tuning", () => {
    var action = {
      type: actions.CHANGE_TUNING,
      key: "custom"
    }
    var generatedAction = actions.changeTuning( "custom" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the scale", () => {
    var action = {
      type: actions.CHANGE_SCALE,
      key: "major"
    }
    var generatedAction = actions.changeScale( "major" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the scale", () => {
    var action = {
      type: actions.CHANGE_SCALE,
      key: "major"
    }
    var generatedAction = actions.changeScale( "major" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the scale note", () => {
    var action = {
      type: actions.CHANGE_SCALE_NOTE,
      note: "D"
    }
    var generatedAction = actions.changeScaleNote( "D" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the chord", () => {
    var action = {
      type: actions.CHANGE_CHORD,
      key: "major"
    }
    var generatedAction = actions.changeChord( "major" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the chord note", () => {
    var action = {
      type: actions.CHANGE_CHORD_NOTE,
      note: "D"
    }
    var generatedAction = actions.changeChordNote( "D" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the number of fretboard notes", () => {
    var action = {
      type: actions.CHANGE_FRETBOARD_NUMBER_OF_NOTES,
      numberOfNotes: 10
    }
    var generatedAction = actions.changeFretboardNumberOfNotes( 10 )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the fretboard string height", () => {
    var action = {
      type: actions.FRETBOARD_STRING_HEIGHT,
      height: 42
    }
    var generatedAction = actions.changeFretboardStringHeight( 42 )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the number fret width", () => {
    var action = {
      type: actions.FRETBOARD_FRET_WIDTH,
      width: 77
    }
    var generatedAction = actions.changeFretboardFretWidth( 77 )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change a custom tuning note", () => {
    var action = {
      type: actions.CHANGE_CUSTOM_TUNING_NOTE,
      stringKey: 1,
      midiNote: 60
    }
    var generatedAction = actions.changeCustomTuningNote( 1, 60 )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should increment custom tuning strings", () => {
    var action = {
      type: actions.INCREMENT_CUSTOM_TUNING_STRINGS
    }
    var generatedAction = actions.incrementCustomTuningStrings()
    expect( action ).toEqual( generatedAction )
  })

  it( "Should decrement custom tuning strings", () => {
    var action = {
      type: actions.DECREMENT_CUSTOM_TUNING_STRINGS
    }
    var generatedAction = actions.decrementCustomTuningStrings()
    expect( action ).toEqual( generatedAction )
  })

  it( "Should toggle show custom tuning midi note", () => {
    var action = {
      type: actions.TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE
    }
    var generatedAction = actions.toggleShowCustomTuningMidiNote()
    expect( action ).toEqual( generatedAction )
  })

})
