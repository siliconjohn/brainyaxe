var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var { Provider } = require('react-redux')
import ScaleChooser from 'ScaleChooser'

describe( 'ScaleChooser', () => {

  it( 'should exist', () => {
    expect( ScaleChooser ).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = {
      scales: [
        { name: 'No Scale', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale1"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"scale2"}
      ],
      selectedScaleKey: "scale1" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ScaleChooser/>
      </Provider>
    )

    var scaleChooser = TestUtils.scryRenderedComponentsWithType( provider, ScaleChooser )[0]
    var $el = $( ReactDOM.findDOMNode( scaleChooser ))

    // check for correct value
    var value = $el.val()
    expect( value ).toBe( initialState.selectedScaleKey )
  })

  it( 'should render the correct number of children', () => {
    var initialState = {
      scales: [
        { name: 'No Scale', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale1"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"scale2"}
      ],
      selectedScaleKey: "scale1" }

    var newStore = store.createStore( initialState )
    var provider = TestUtils.renderIntoDocument(
      <Provider store={ newStore }>
        <ScaleChooser/>
      </Provider>
    )

    var scaleChooser = TestUtils.scryRenderedComponentsWithType( provider, ScaleChooser )[0]
    var $el = $( ReactDOM.findDOMNode( scaleChooser ))

    // check number of children
    expect( $el.children().length ).toBe( initialState.scales.length )
  })
})
