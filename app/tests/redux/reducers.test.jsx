var React = require('react')
var expect = require('expect')
var reducers = require('reducers')
var deepFreeze = require('deep-freeze-strict')

describe( 'Redux Reducers', () => {

  describe( 'tuningReducer', () => {

    it( 'Should change scale', () => {
      var action = {
        type: "CHANGE_TUNING",
        key: "test"
      }
      var response = reducers.tuningReducer( deepFreeze( 'default' ), deepFreeze( action ))
      expect( response ).toEqual( action.key )
    })

    it( 'Should change scale to custom', () => {
      var action = {
        type: "INCREMENT_CUSTOM_TUNING_STRINGS"
      }
      var response = reducers.tuningReducer( deepFreeze( 'default' ), deepFreeze( action ))
      expect( response ).toEqual( 'custom' )
    })

    it( 'Should also change scale to custom', () => {
      var action = {
        type: "DECREMENT_CUSTOM_TUNING_STRINGS"
      }
      var response = reducers.tuningReducer( deepFreeze( 'default' ), deepFreeze( action ))
      expect( response ).toEqual( 'custom' )
    })
  })

  describe( 'scaleReducer', () => {

    it( 'Should change scale', () => {
      var action = {
        type: "CHANGE_SCALE",
        key: "custom"
      }
      var response = reducers.scaleReducer( deepFreeze( 'default' ), deepFreeze( action ))
      expect( response ).toEqual( action.key )
    })
  })

  describe( 'scaleNoteReducer', () => {

    it( 'Should change scale note', () => {
      var action = {
        type: "CHANGE_SCALE_NOTE",
        note: "C"
      }
      var response = reducers.scaleNoteReducer( deepFreeze( 'E' ), deepFreeze( action ))
      expect( response ).toEqual( action.note )
    })
  })

  describe( 'chordReducer', () => {

    it( 'Should change chord', () => {
      var action = {
        type: "CHANGE_CHORD",
        key: "custom"
      }
      var response = reducers.chordReducer( deepFreeze( 'default' ), deepFreeze( action ))
      expect( response ).toEqual( action.key )
    })
  })

  describe( 'chordNoteReducer', () => {

    it( 'Should change chord note', () => {
      var action = {
        type: "CHANGE_CHORD_NOTE",
        note: "C"
      }
      var response = reducers.chordNoteReducer( deepFreeze( 'E' ), deepFreeze( action ))
      expect( response ).toEqual( action.note )
    })
  })

  describe( 'toggleShowCustomTuningMidiNoteReducer', () => {

    it( 'Should toggle showCustomTuningMidiNote', () => {
      var action = {
        type: "TOGGLE_SHOW_CUSTOM_TUNING_MIDI_NOTE"
      }
      var response = reducers.toggleShowCustomTuningMidiNoteReducer( deepFreeze( true ), deepFreeze( action ))
      expect( response ).toEqual( false )
    })
  })

  describe( 'numberOfCustomTuningStringsReducer', () => {

    it( 'Should increment number of custom tuning strings', () => {
      var action = {
        type: "INCREMENT_CUSTOM_TUNING_STRINGS"
      }
      var response = reducers.numberOfCustomTuningStringsReducer( deepFreeze( 1 ), deepFreeze( action ))
      expect( response ).toEqual( 2 )
    })

    it( 'Should decrement number of custom tuning strings', () => {
      var action = {
        type: "DECREMENT_CUSTOM_TUNING_STRINGS"
      }
      var response = reducers.numberOfCustomTuningStringsReducer( deepFreeze( 2 ), deepFreeze( action ))
      expect( response ).toEqual( 1 )
    })

    it( 'Should not decrement number of custom tuning strings', () => {
      var action = {
        type: "DECREMENT_CUSTOM_TUNING_STRINGS"
      }
      var response = reducers.numberOfCustomTuningStringsReducer( deepFreeze( 1 ), deepFreeze( action ))
      expect( response ).toEqual( 1 )
    })
  })

  describe( 'customTuningReducer', () => {

    it( 'Should add a string to custom tuning', () => {
      var tuningState = [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var tuningResultState = [
        { name: 'Custom', notes:'E,A,D,G,B,E,A', midiNotes:[69,64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var action = {
        type: "INCREMENT_CUSTOM_TUNING_STRINGS"
      }

      var response = reducers.customTuningReducer(  tuningState , deepFreeze( action ))
      expect( response ).toEqual( tuningResultState )
    })

    it( 'Should remove a string from custom tuning', () => {
      var tuningState = [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var tuningResultState = [
        { name: 'Custom', notes:'E,A,D,G,B', midiNotes:[59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var action = {
        type: "DECREMENT_CUSTOM_TUNING_STRINGS"
      }

      var response = reducers.customTuningReducer(  tuningState , deepFreeze( action ))
      expect( response ).toEqual( tuningResultState )
    })

    it( 'Should not remove a string from custom tuning', () => {
      var tuningState = [
        { name: 'Custom', notes:'E', midiNotes:[64], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var tuningResultState = [
        { name: 'Custom', notes:'E', midiNotes:[64], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var action = {
        type: "DECREMENT_CUSTOM_TUNING_STRINGS"
      }

      var response = reducers.customTuningReducer(  tuningState , deepFreeze( action ))
      expect( response ).toEqual( tuningResultState )
    })

    it( 'Should change a custom tuning note', () => {
      var tuningState = [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"}]

      var tuningResultState = [
        { name: 'Custom', notes:'C,A,D,G,B,E', midiNotes:[64,59,55,50,45,60], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"}]

      var action = {
        type: "CHANGE_CUSTOM_TUNING_NOTE",
        stringKey: 5,
        midiNote: 60
      }

      var response = reducers.customTuningReducer(  tuningState , deepFreeze( action ))
      expect( response ).toEqual( tuningResultState )
    })

    it( 'Should not change a custom tuning note', () => {
      var tuningState = [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var action = {
        type: "CHANGE_CUSTOM_TUNING_NOTE",
        stringKey: 11,  // out of bounds, test should catch error
        midiNote: 65
      }

      var response = reducers.customTuningReducer(  tuningState , deepFreeze( action ))
      expect( response ).toEqual( tuningState )
    })

    it( 'Should also not change a custom tuning note', () => {
      var tuningState = [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
      ]

      var action = {
        type: "CHANGE_CUSTOM_TUNING_NOTE",
        stringKey: 1,
        midiNote: 650 // out of bounds, test should catch error
      }

      var response = reducers.customTuningReducer(  tuningState , deepFreeze( action ))
      expect( response ).toEqual( tuningState )
    })
  })
})
