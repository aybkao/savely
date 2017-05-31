'use strict';
const express = require('express');
const router = express.Router();

router.route('/transactions')

  // gets transactions in the last 90 days (3 months)
  .get(function(req, res) {
    var results = []; // database query that gets 20 results
    res.json(results);
  })
  // posts new transaction, updates transactions
  .post(function(req, res) {
    var newTransaction = req.body.transaction;
    // database query that adds transaction to db;
    res.end();
  });

router.route('/transactions?Categories')
  // gets budget categories
  .get(function(req, res) {
    var results = []; // database query that gets all categories
    res.json(results);
  })
  // updates a budget category
  .post(function(req, res) {
    var newCategory = req.body.category;
    // database query that updates db;
    res.end();
  });

module.exports = router;
