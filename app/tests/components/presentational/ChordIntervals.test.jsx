var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var store = require('store')
var $ = require('jquery')
var { Provider } = require('react-redux')
import ChordIntervals from 'ChordIntervals'

describe( 'ChordIntervals', () => {

  it( 'should exist', () => {
    expect( ChordIntervals ).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = {
      chords: [
        { name: 'No Chord', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
        { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"}
      ],
      selectedChordKey: "chord1" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ChordIntervals/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, ChordIntervals )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check for correct value
    var value = $el.text()
    expect( value ).toBe( '1,3,5' )
  })
})
