var React = require('react')
var expect = require('expect')
var actions = require('actions')

describe( "Redux Actions", () => {

  it( "Should change the tuning", () => {
    var action = {
      type: "CHANGE_TUNING",
      key: "custom"
    }
    var generatedAction = actions.changeTuning( "custom" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the scale", () => {
    var action = {
      type: "CHANGE_SCALE",
      key: "major"
    }
    var generatedAction = actions.changeScale( "major" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the scale", () => {
    var action = {
      type: "CHANGE_SCALE",
      key: "major"
    }
    var generatedAction = actions.changeScale( "major" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the scale note", () => {
    var action = {
      type: "CHANGE_SCALE_NOTE",
      note: "D"
    }
    var generatedAction = actions.changeScaleNote( "D" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the chord", () => {
    var action = {
      type: "CHANGE_CHORD",
      key: "major"
    }
    var generatedAction = actions.changeChord( "major" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change the chord note", () => {
    var action = {
      type: "CHANGE_CHORD_NOTE",
      note: "D"
    }
    var generatedAction = actions.changeChordNote( "D" )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should change a custom tuning note", () => {
    var action = {
      type: "CHANGE_CUSTOM_TUNING_NOTE",
      stringKey: 1,
      midiNote: 60
    }
    var generatedAction = actions.changeCustomTuningNote( 1, 60 )
    expect( action ).toEqual( generatedAction )
  })

  it( "Should increment custom tuning strings", () => {
    var action = {
      type: "INCREMENT_CUSTOM_TUNING_STRINGS"
    }
    var generatedAction = actions.incrementCustomTuningStrings()
    expect( action ).toEqual( generatedAction )
  })

  it( "Should decrement custom tuning strings", () => {
    var action = {
      type: "DECREMENT_CUSTOM_TUNING_STRINGS"
    }
    var generatedAction = actions.decrementCustomTuningStrings()
    expect( action ).toEqual( generatedAction )
  })

  it( "Should toggle show custom tuning midi note", () => {
    var action = {
      type: "TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE"
    }
    var generatedAction = actions.toggleShowCustomTuningMidiNote()
    expect( action ).toEqual( generatedAction )
  })
})
