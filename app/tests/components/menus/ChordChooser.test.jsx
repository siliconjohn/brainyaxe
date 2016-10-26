var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var { Provider } = require('react-redux')
import ChordChooser from 'ChordChooser'

describe( 'ChordChooser', () => {

  it( 'should exist', () => {
    expect( ChordChooser ).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = {
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
        { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"}
      ],
      selectedChordKey: "default" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ChordChooser/>
      </Provider>
    )

    var chordNoteChooser = TestUtils.scryRenderedComponentsWithType( provider, ChordChooser )[0]
    var $el = $( ReactDOM.findDOMNode( chordNoteChooser ))

    // check for correct value
    var value = $el.val()
    expect( value ).toBe( initialState.selectedChordKey )
  })

  it( 'should render the correct number of children', () => {
    var initialState = {
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
        { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"}
      ],
      selectedChordKey: "default" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ChordChooser/>
      </Provider>
    )

    var chordNoteChooser = TestUtils.scryRenderedComponentsWithType( provider, ChordChooser )[0]
    var $el = $( ReactDOM.findDOMNode( chordNoteChooser ))

    // check number of children
    expect( $el.children().length ).toBe( initialState.chords.length )
  })
})
