var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var store = require('store')
var $ = require('jquery')
var { Provider } = require('react-redux')
import NoteCirclesScale from 'NoteCirclesScale'

describe( 'NoteCirclesScale', () => {

  it( 'should exist', () => {
    expect( NoteCirclesScale ).toExist()
  })

  it( 'should have the correct number of children', () => {
    var initialState = {
      scales: [
        { name: 'No Scale', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale1"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"scale2"}
      ],
      selectedScaleKey: "scale1",
      selectedScaleNote: "A" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <NoteCirclesScale/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, NoteCirclesScale )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check number of children
    expect( $el.children().length ).toBe( 7 )
  })
})
