var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')

var TuningChooserOption = require( 'TuningChooserOption' )

describe( 'TuningChooserOption', () => {

  it( 'should exist', () => {
    expect(TuningChooserOption).toExist()
  })

  it( 'should render with correct props', () => {
    var tempProps = { notes:"A", tuningKey:"custom", name:"tuningName" }

    var component = TestUtils.renderIntoDocument(
      <div><TuningChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.tuning-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.tuningKey )

    var text = $el.text();
    expect( text ).toBe( tempProps.name + " - " + tempProps.notes  )
  })
})
