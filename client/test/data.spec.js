const expect = require('chai').expect;
const taxes = require('../src/stores/federal.js');
const states = require('../src/stores/states.js');

describe('REACT OBJECTS & ARRAYS', function(done) {

  it('Should store objects with federal tax infomation', function() {
    expect(taxes).to.be.an('object');
  })

  it('Should include federal information for married and single status', function() {
    expect(taxes.single_tax_brackets).to.be.an('object');
    expect(taxes.married_tax_brackets).to.be.an('object');
  })

  it('Each status should have an object with seven income tax brackets', function() {
    expect(Object.keys(taxes.single_tax_brackets).length).to.equal(7);
    expect(Object.keys(taxes.married_tax_brackets).length).to.equal(7);
  })

  it('Should hold information for federal tax brackets', function() {
    expect(taxes).to.be.an('object');
    expect(taxes.single_tax_brackets).to.be.an('object');
    expect(taxes.married_tax_brackets).to.be.an('object');
  })

  it('Should store an array with state tax infomation', function() {
    expect(states).to.be.an('array');
  })

  it('Should hold information for the 50 states and Washington DC', function() {
    expect(states.length).to.equal(51);
  })

  it('Should include state information for married and single status', function() {
    expect(states[0].single_tax_brackets).to.be.an('object');
    expect(states[0].married_tax_brackets).to.be.an('object');
  })

});
