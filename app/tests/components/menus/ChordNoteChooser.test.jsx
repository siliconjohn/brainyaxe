var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var { Provider } = require('react-redux')
var utils = require('utils')
import ChordNoteChooser from 'ChordNoteChooser'

describe( 'ChordNoteChooser', () => {

  it( 'should exist', () => {
    expect(ChordNoteChooser).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = { selectedChordNote: "A"  }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ChordNoteChooser/>
      </Provider>
    )

    var chordNoteChooser = TestUtils.scryRenderedComponentsWithType( provider, ChordNoteChooser )[0]
    var $el = $( ReactDOM.findDOMNode( chordNoteChooser ))

    // check for correct value
    var value = $el.val()
    expect( value ).toBe( initialState.selectedChordNote )
  })

  it( 'should render child <option>s with the twelveNotesTable', () => {
    var initialState = { selectedChordNote: "A"  }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ChordNoteChooser/>
      </Provider>
    )

    var chordNoteChooser = TestUtils.scryRenderedComponentsWithType( provider, ChordNoteChooser )[0]
    var $el = $( ReactDOM.findDOMNode( chordNoteChooser ))

    // check number of children (<ChordNoteChooserOption/>)
    expect( $el.children().length ).toBe( utils.twelveNotesTable.length )
  })
})
