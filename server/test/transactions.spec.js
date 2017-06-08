'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

describe('TRANSACTIONS PAGE', function() {

  var testPostObj = {
    "vendor": "Test",
    "amount": 1,
    "description": "Test",
    "date": "2017-05-30",
    "id": 21
  };

  it('should have a transactions page ("/transaction")', function(done) {
    request(app)
      .get('/transaction')
      .expect(function(res) {
        expect(res.status).to.not.be.within(400, 599);
      })
      .end(done);
  });

  it('transactions page should accept get requests', function(done) {
    request(app)
      .get('/transaction')
      .expect(201)
      .end(done);
  });

  it('get requests should fetch all transactions from db', function(done) {
    request(app)
      .get('/transaction')
      .expect(function(res) {
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.be.an('object');
      })
      .end(done);
  });

  it('fetched transactions should have vendor, description, amount, category, and date fields', function(done) {
    request(app)
      .get('/transaction')
      .expect(function(res) {
        expect(res.body[0].vendor).to.exist;
        expect(res.body[0].description).to.exist;
        expect(res.body[0].amount).to.exist;
        expect(res.body[0].category).to.exist;
        expect(res.body[0].date).to.exist;
      })
      .end(done);
  });

  it('transactions page should accept post requests', function(done) {
    request(app)
      .post('/transaction')
      .send(testPostObj)
      .expect(201)
      .end(done);
  });

  it('post requests should have an object as body', function(done) {
    request(app)
      .post('/transaction')
      .send(testPostObj)
      .expect(function(res) {
        expect(res.body).to.be.an('object');
      })
      .end(done);
  });

  it('should post fields for id, vendor, amount, description, date', function(done) {
    request(app)
      .post('/transaction')
      .send(testPostObj)
      .expect(function(res) {
        expect(!!res.body.id).to.exist;
        expect(!!res.body.vendor).to.exist;
        expect(!!res.body.amount).to.exist;
        expect(!!res.body.description).to.exist;
        expect(!!res.body.date).to.exist;
      })
      .end(done);
  });

});
