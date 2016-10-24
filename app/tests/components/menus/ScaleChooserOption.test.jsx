var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')

var ScaleChooserOption = require( 'ScaleChooserOption' )

describe( 'ScaleChooserOption', () => {

  it( 'should exist', () => {
    expect(ScaleChooserOption).toExist()
  })

  it( 'should render with correct props', () => {
    var tempProps = { scaleKey:"major", name:"mrMajor" }

    var component = TestUtils.renderIntoDocument(
      <div><ScaleChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.scale-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.scaleKey )

    var text = $el.text();
    expect( text ).toBe( tempProps.name  )
  })
})
