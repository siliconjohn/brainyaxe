var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var { Provider } = require('react-redux')
import TuningChooser from 'TuningChooser'

describe( 'TuningChooser', () => {

  it( 'should exist', () => {
    expect( TuningChooser ).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = {
      tunings: [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[64,59,55,50,45,38], instrument: "guitar", key:"tuning2"}
      ],
      selectedTuningKey: "default" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <TuningChooser/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, TuningChooser )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check for correct value
    var value = $el.val()
    expect( value ).toBe( initialState.selectedTuningKey )
  })

  it( 'should render the correct number of children', () => {
    var initialState = {
      tunings: [
        { name: 'Custom', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "Custom", key:"custom"},
        { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[64,59,55,50,45,40], instrument: "guitar", key:"default"},
        { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[64,59,55,50,45,38], instrument: "guitar", key:"tuning2"}
      ],
      selectedTuningKey: "default" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <TuningChooser/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, TuningChooser )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check number of children
    expect( $el.children().length ).toBe( initialState.tunings.length )
  })
})
