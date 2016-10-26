var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var store = require('store')
var $ = require('jquery')
var { Provider } = require('react-redux')
import ScaleIntervals from 'ScaleIntervals'

describe( 'ScaleIntervals', () => {

  it( 'should exist', () => {
    expect( ScaleIntervals ).toExist()
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
        <ScaleIntervals/>
      </Provider>
    )

    var comp = TestUtils.scryRenderedComponentsWithType( provider, ScaleIntervals )[0]
    var $el = $( ReactDOM.findDOMNode( comp ))

    // check for correct value
    var value = $el.text()
    expect( value ).toBe( '1,2,3,4,5,6,7' )
  })
})
