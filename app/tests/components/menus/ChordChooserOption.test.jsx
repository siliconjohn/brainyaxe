var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')

var ChordChooserOption = require( 'ChordChooserOption' )

describe( 'ChordChooserOption', () => {

  it( 'should exist', () => {
    expect(ChordChooserOption).toExist()
  })

  it( 'should render with correct props', () => {
    var tempProps = { chordKey:"majorKey", name:"major" }

    var component = TestUtils.renderIntoDocument(
      <div><ChordChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.chord-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.chordKey )

    var text = $el.text();
    expect( text ).toBe( tempProps.name )
  })
})
