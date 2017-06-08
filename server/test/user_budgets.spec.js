'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

describe('BUDGETS PAGE', function() {

  it('should have a budget page ("/budget")', function(done) {
    request(app)
      .get('/budget')
      .expect(function(res) {
        expect(res.status).to.not.be.within(400, 599);
      })
      .end(done);
  });

  it('budgets page should accept get requests', function(done) {
    request(app)
      .get('/budget')
      .expect(201)
      .end(done);
  });

  it('get requests should fetch all budgets from db', function(done) {
    request(app)
      .get('/budget')
      .expect(function(res) {
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.be.an('object');
      })
      .end(done);
  });

  it('fetched budgets should have category and targetlimit fields', function(done) {
    request(app)
      .get('/budget')
      .expect(function(res) {
        expect(res.body[0].category).to.exist;
        expect(res.body[0].targetlimit).to.exist;
      })
      .end(done);
  });

  it('categories should include restaurants, groceries, entertainment, clothing, & cosmetics', function(done) {
    request(app)
      .get('/budget')
      .expect(function(res) {
        var matches = 0;
        res.body.forEach((item) => {
          if (item.category === 'Restaurants' ||
              item.category === 'Groceries' ||
              item.category === 'Entertainment' ||
              item.category === 'Clothing' ||
              item.category === 'Housing' ||
              item.category === 'Cosmetics'
          ){
            matches++;
          }
        });
        expect(matches).to.equal(6);
      })
      .end(done);
  });

  it('budgets page should not accept post requests', function(done) {
    request(app)
      .post('/budget')
      .send({ category: 'Restaurants', targetlimit: 9000 })
      .expect(404)
      .end(done);
  });
});
