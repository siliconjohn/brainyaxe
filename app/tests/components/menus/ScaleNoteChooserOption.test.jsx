var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')

var ScaleNoteChooserOption = require( 'ScaleNoteChooserOption' )

describe( 'ScaleNoteChooserOption', () => {

  it( 'should exist', () => {
    expect(ScaleNoteChooserOption).toExist()
  })

  it( 'should render with correct props', () => {
    var tempProps = { note:"A" }

    var component = TestUtils.renderIntoDocument(
      <div><ScaleNoteChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.scale-note-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.note )

    var text = $el.text();
    expect( text ).toBe( tempProps.note  )
  })
})
