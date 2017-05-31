'use strict';
const express = require('express');
const router = express.Router();

router.route('/transactions')
  // gets top 20 [previous] transactions upon load
  .get(function(req, res) {
    var results = []; // database query that gets 20 results
    res.json(results);
  })
  // user submits transaction, updates transactions
  .post(function(req, res) {
    var newTransaction = req.body.transaction;
    // database query that adds transaction to db;
    res.end();
  });

router.route('/transactions?All')
  // gets all [previous] transactions upon load
  .get(function(req, res) {
    var results = []; // database query that gets all results
    res.json(results);
  });


router.route('/transactions?Categories')
  .get(function(req, res) {
    var results = []; // database query that gets all categories
    res.json(results);
  });

module.exports = router;
