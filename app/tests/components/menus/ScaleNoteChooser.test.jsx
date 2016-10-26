var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var { Provider } = require('react-redux')
var utils = require('utils')
import ScaleNoteChooser from 'ScaleNoteChooser'

describe( 'ScaleNoteChooser', () => {

  it( 'should exist', () => {
    expect(ScaleNoteChooser).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = { selectedScaleNote: "A"  }
    var newStore = store.createStore( initialState )

    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ScaleNoteChooser/>
      </Provider>
    )

    var scaleNoteChooser = TestUtils.scryRenderedComponentsWithType( provider, ScaleNoteChooser )[0]
    var $el = $( ReactDOM.findDOMNode( scaleNoteChooser ))

    // check for correct value
    var value = $el.val()
    expect( value ).toBe( initialState.selectedScaleNote )
  })

  it( 'should render the correct number of children', () => {
    var initialState = { selectedScaleNote: "A"  }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ScaleNoteChooser/>
      </Provider>
    )

    var scaleNoteChooser = TestUtils.scryRenderedComponentsWithType( provider, ScaleNoteChooser )[0]
    var $el = $( ReactDOM.findDOMNode( scaleNoteChooser ))

    // check number of children (<ScaleNoteChooserOption/>)
    expect( $el.children().length ).toBe( utils.twelveNotesTable.length )
  })
})
