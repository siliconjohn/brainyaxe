var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')
var $ = require('jquery')
var store = require('store')
var ScaleNoteChooser = require( 'ScaleNoteChooser' )
var {Provider} = require('react-redux');


describe( 'ScaleNoteChooser', () => {

  it( 'should exist', () => {
    expect(ScaleNoteChooser).toExist()
  })

  it( 'should render with correct props', () => {
    var initialState = { selectedScaleNote: "A"  }
    var newStore = store.createStore( initialState )
    //
    // var provider = TestUtils.renderIntoDocument(
    //   <Provider store={ newStore }>
    //     <ScaleNoteChooser/>
    //   </Provider>
    // )
    // var todoList = TestUtils.scryRenderedComponentsWithType(provider, ScaleNoteChooser)[0];

    //
    // var component = TestUtils.renderIntoDocument(
    //   <div><ScaleNoteChooser { ...tempProps }/></div>
    // )
    //
    // var $el = $( ReactDOM.findDOMNode( component )).find( '.scale-note-select' )
    //
    // var value = $el.val();
    // expect( value ).toBe( tempProps.tuningKey )
    //
    // var text = $el.text();
    // expect( text ).toBe( tempProps.name + " - " + tempProps.notes  )
  })
})
