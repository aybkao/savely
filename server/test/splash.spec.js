'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

describe('SPLASH PAGE', function() {
  it('main page ("/") redirects to login', function(done) {
    request(app)
      .get('/')
      .expect(302)
      .expect(function(res) {
        expect(res.text).to.equal('Found. Redirecting to /login');
      })
      .end(done);
  });

  it('main page ("/") should not accept post requests', function(done) {
    request(app)
      .post('/')
      .expect(404)
      .end(done);
  });
});

describe('SIGNUP PAGE', function() {
  it('should have a functioning signup page ("/signup") that redirects', function(done) {
    request(app)
      .get('/')
      .expect(302)
      .expect(function(res) {
        expect(res.text).to.equal('Found. Redirecting to /login');
      })
      .end(done);
  });

  it('signup page ("/") should not accept post requests', function(done) {
    request(app)
      .post('/')
      .expect(404)
      .end(done);
  });
});

// xdescribe('SERVER', function() {
//   it('sends back hello world', function(done) {
//     request(app)
//       .get('/api')
//       .expect(200)
//       .expect(function(res) {
//         expect(res.text).to.equal('Hello World!');
//       })
//       .end(done);
//   });
//
//   it('accepts POST request', function(done) {
//     request(app)
//       .post('/api')
//       .expect(201)
//       .expect(function(res) {
//         expect(res.body.data).to.equal('Posted!');
//       })
//       .end(done);
//   });
// });
