var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var store = require('store')
var $ = require('jquery')
var { Provider } = require('react-redux')
import NoteCirclesChord from 'NoteCirclesChord'

describe( 'NoteCirclesChord', () => {

  it( 'should exist', () => {
    expect( NoteCirclesChord ).toExist()
  })

  it( 'should have the correct number of children', () => {
    var initialState = {
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
        { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"}
      ],
      selectedChordKey: "chord1",
      selectedChordNote: "A" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <NoteCirclesChord/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, NoteCirclesChord )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check number of children
    expect( $el.children().length ).toBe( 3 )
  })
})
