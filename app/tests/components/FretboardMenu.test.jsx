var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var {getInitialState} = require('../initialstate');

var MenuContainer = require('MenuContainer');

describe('MenuContainer', () => {

  it('should exist', () => {
    expect(MenuContainer).toExist();
  });

  it("loads without error", function () {
    var initialState = getInitialState();

    var MenuContainer = TestUtils.renderIntoDocument(<MenuContainer scales={initialState.scales}
       tunings={initialState.tunings} chords={initialState.chords} selectedChordNote={initialState.selectedChordNote}
       selectedTuningKey={initialState.selectedTuningKey} selectedScaleKey={initialState.selectedScaleKey}
       selectedScaleNote={initialState.selectedScaleNote} selectedChordKey={initialState.selectedChordKey}/>)

    expect(MenuContainer).toExist();
  });

  // var h4 = TestUtils.scryRenderedDOMComponentsWithTag(e, 'h4')
  // console.log(h4[0].textContent);
  // expect(h4.length).toEqual(3);

});
