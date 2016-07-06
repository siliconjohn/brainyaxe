var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var FretboardMenu = require('FretboardMenu');

describe('FretboardMenu', () => {
  it('should exist', () => {
    expect(FretboardMenu).toExist();
  });


  // not finised
  // it('f', () => {
  //   var data = {
  //     scales: [
  //       { name: 'Major', degrees: '1,2,3,4,5,6,7', key:"0"},
  //       { name: 'Blues', degrees: '1,♭3,4,♭5,5,♭7', key:"1"}
  //     ],
  //     tunings: [
  //       { name: 'Standard', notes:'E A D G B E', midiNotes:'40,45,50,55,59,64', key:"0"}
  //     ]
  //   }
  //
  //   var fretboardMenu = TestUtils.renderIntoDocument(<FretboardMenu scales={data.scales} tunings={data.tunings}/>);
  //
  // });
});
