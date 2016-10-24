var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')

var ChordNoteChooserOption = require( 'ChordNoteChooserOption' )

describe( 'ChordNoteChooserOption', () => {

  it( 'should exist', () => {
    expect(ChordNoteChooserOption).toExist()
  })

  it( 'should render with correct props', () => {
    var tempProps = { note:"A"  }

    var component = TestUtils.renderIntoDocument(
      <div><ChordNoteChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.chord-note-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.note )

    var text = $el.text();
    expect( text ).toBe( tempProps.note )
  })
})
