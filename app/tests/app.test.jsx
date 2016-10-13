var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var AppContainer = require('AppContainer');

describe('App', () => {

  it('should exist', () => {
    expect(1).toBe(1);
  });

  it("loads without error", function () {
    var AppContainer = TestUtils.renderIntoDocument(<AppContainer/>);
    expect(AppContainer).toExist();
  });
});
