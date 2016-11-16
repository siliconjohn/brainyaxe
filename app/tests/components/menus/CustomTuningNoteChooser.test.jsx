var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var { Provider } = require('react-redux')
var utils = require('utils')
import CustomTuningNoteChooser from 'CustomTuningNoteChooser'

describe( 'CustomTuningNoteChooser', () => {

  it( 'should exist', () => {
    expect( CustomTuningNoteChooser ).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = {
      references: [
        { key: 60, message:"Middle C"},
        { key: 0, message:"Lowest Note"},
        { key: 131, message:"Highest Note"}
      ],
      tunings: [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[60,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[64,59,55,50,45,38], instrument: "guitar", key:"tuning2"}
      ],
      showCustomTuningMidiNote: false
    }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <CustomTuningNoteChooser stringNumber="0"/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, CustomTuningNoteChooser )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check for correct value
    var value = $el.val()
    expect( value ).toBe( "60" )

    // check for correct text
    var text = $el.find("option:selected").text()
    expect( text ).toBe( "C - Middle C" )
  })

  it( 'should render the correct number of children', () => {
    var initialState = {
      references: [
        { key: 60, message:"Middle C"},
        { key: 0, message:"Lowest Note"},
        { key: 131, message:"Highest Note"}
      ],
      tunings: [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[60,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[64,59,55,50,45,38], instrument: "guitar", key:"tuning2"}
      ],
      showCustomTuningMidiNote: false
    }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <CustomTuningNoteChooser stringNumber="0"/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, CustomTuningNoteChooser )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check number of children
    expect( $el.children().length ).toBe( utils.noteNamesTable.length )
  })
})
