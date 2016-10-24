var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')

var CustomTuningNoteChooserOption = require( 'CustomTuningNoteChooserOption' )

describe( 'CustomTuningNoteChooserOption', () => {

  it( 'should exist', () => {
    expect(CustomTuningNoteChooserOption).toExist()
  })

  it( 'should render with correct props including midi note and reference', () => {
    var tempProps = { index:60, note:"C", showMidiNote:true,
                      references: [
                        { key: 60, message:"Middle C"},
                        { key: 0, message:"Lowest Note"}
                      ]}

    var component = TestUtils.renderIntoDocument(
      <div><CustomTuningNoteChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.custom-tuning-note-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.index.toString() )

    var text = $el.text();
    expect( text ).toBe( tempProps.note + " - " + tempProps.index.toString() + " - " + "Middle C" )
  })

  it( 'should render with correct props excluding midi note and reference', () => {
    var tempProps = { index:60, note:"C", showMidiNote:false,
                      references: [
                        { key: 61, message:"Middle C"},
                        { key: 0, message:"Lowest Note"}
                      ]}

    var component = TestUtils.renderIntoDocument(
      <div><CustomTuningNoteChooserOption { ...tempProps }/></div>
    )

    var $el = $( ReactDOM.findDOMNode( component )).find( '.custom-tuning-note-chooser-option' )

    var value = $el.val();
    expect( value ).toBe( tempProps.index.toString() )

    var text = $el.text();
    expect( text ).toBe( tempProps.note )
  })
})
