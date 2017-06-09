const expect = require('chai').expect;
const react = require('react');
const reactDOM = require('react-dom');
const reactRouter = require('react-router');
const reactRedux = require('react-redux');

describe('REACT COMPONENTS', function(done) {
  it('react, react-dom, and react-router should be installed and running', function() {
    expect(react).to.be.an('object');
    expect(reactDOM).to.be.an('object');
    expect(reactRouter).to.be.an('object');
  });

  it('redux should be installed and running', function() {
    expect(reactRedux).to.be.an('object');
  });
});
