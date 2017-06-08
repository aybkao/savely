'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

describe('SPLASH PAGE', function() {
  it('should have a valid main page ("/")', function(done) {
    request(app)
      .get('/')
      .expect(function(res) {
        expect(res.status).to.not.be.within(400, 499);
      })
      .end(done);
  });

  it('main page ("/") should redirect to login ("/login")', function(done) {
    request(app)
      .get('/')
      .expect(302)
      .expect(function(res) {
        expect(res.text).to.equal('Found. Redirecting to /login');
      })
      .end(done);
  });

  it('main page should not accept post requests directly', function(done) {
    request(app)
      .post('/')
      .expect(404)
      .end(done);
  });
});

describe('SIGNUP PAGE', function() {
  it('should have a valid signup page ("/signup")', function(done) {
    request(app)
      .get('/signup')
      .expect(200)
      .end(done);
  });

  it('signup page should accept get requests but not redirect them', function(done) {
    request(app)
      .get('/signup')
      .expect(function(res) {
        expect(res.status).to.not.be.within(300, 399);
      })
      .end(done);
  });

  it('signup page should accept post requests and redirect them', function(done) {
    request(app)
      .post('/signup')
      .expect(302)
      .end(done);
  });

});

describe('PROFILE PAGE', function() {
  it('should have a profile page ("/profile")', function(done) {
    request(app)
      .get('/profile')
      .expect(function(res) {
        expect(res.status).to.not.be.within(400, 499);
      })
      .end(done);
  });

  it('profile page should accept get requests and redirect them', function(done) {
    request(app)
      .get('/profile')
      .expect(302)
      .end(done);
  });

  it('profile page should not accept post requests', function(done) {
    request(app)
      .post('/profile')
      .expect(404)
      .end(done);
  });
});
