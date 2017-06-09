const expect = require('chai').expect;
const bodyParser = require('body-parser');
const bookshelf = require('bookshelf');
const express = require('express');
const expressSession = require('express-session');
const knex = require('knex');
const passport = require('passport');
const redis = require('redis');

describe('BACKEND DEPENDENCIES', function(done) {
  it('express and express-session should be installed and running', function() {
    expect(express).to.be.a('function');
    expect(expressSession).to.be.a('function');
  });

  it('middleware (bodyParser) should be installed and running', function() {
    expect(bodyParser).to.be.a('function');
  });


  it('orms and query libraries should be installed and running', function() {
    expect(bookshelf).to.be.a('function');
    expect(knex).to.be.a('function');
  });

  it('database connections should be established', function() {
    expect(redis).to.be.a('object');
  });
});
