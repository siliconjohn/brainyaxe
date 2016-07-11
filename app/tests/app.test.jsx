var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var FKApp = require('FKApp');

describe('App', () => {

  it('should exist', () => {
    expect(1).toBe(1);
  });

  it("loads without error", function () {
    var fkApp = TestUtils.renderIntoDocument(<FKApp/>);
    expect(FKApp).toExist();
  });
});
