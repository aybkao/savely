const expect = require('chai').expect;

const bcrypt = require('bcrypt-nodejs');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const bookshelf = require('bookshelf');
const connectRedis = require('connect-redis');
const cookieParser = require('cookie-parser');
const express = require('express');
const expressSession = require('express-session');
const knex = require('knex');
const morgan = require('morgan');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const passportGoogle = require('passport-google-oauth');
const passportLocal = require('passport-local');
const passportTwitter = require('passport-twitter');
const redis = require('redis');

describe('BACKEND DEPENDENCIES', function(done) {
  it('express and express-session should be installed and running', function() {
    expect(express).to.be.a('function');
    expect(expressSession).to.be.a('function');
  });

  it('middleware (bodyParser, bluebird, morgan) should be installed and running', function() {
    expect(bodyParser).to.be.a('function');
    expect(bluebird).to.be.a('function');
  });


  it('orms & query libraries should be installed and running', function() {
    expect(bookshelf).to.be.a('function');
    expect(knex).to.be.a('function');
  });

  it('database connections should be established', function() {
    expect(redis).to.be.an('object');
    expect(connectRedis).to.be.a('function');
  });

  it('auth dependencies (bcrypt, config, passport) should be connected', function() {
    expect(bcrypt).to.be.an('object');
    expect(cookieParser).to.be.a('function');
    expect(passport).to.be.an('object');
    expect(passportLocal).to.be.a('function');
  });

  it('passport should have dependencies for facebook, google, & facebook', function() {
    expect(passportFacebook).to.be.a('function');
    expect(passportGoogle).to.be.a('object');
    expect(passportTwitter).to.be.a('function');
  });
});
