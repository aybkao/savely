'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

describe('TRANSACTIONS PAGE', function() {
  it('should have a valid transaction page ("/transaction")', function(done) {
    request(app)
      .get('/transaction')
      .expect(function(res) {
        expect(res.status).to.not.be.within(400, 499);
      })
      .end(done);
  });

  it('transactions page should properly get requests', function(done) {
    request(app)
      .get('/transaction')
      .expect(function(res) {
        expect(res.status).to.be.within(200, 201);
      })
      .end(done);
  });

  it('transactions page should accept valid post requests', function(done) {

    var testPostObj = {
      "vendor": "Test",
      "amount": 1,
      "description": "Test",
      "date": "2017-05-30",
      "id": 21
    };

    request(app)
      .post('/transaction')
      .send(testPostObj)
      .expect(function(res) {
        expect(res.status).to.be.within(200, 201);
      })
      .end(done);
  });
});
