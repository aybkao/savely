'use strict';
const express = require('express');
const router = express.Router();
const TransactionsController = require('../controllers').Transactions;

router.route('/')

  // gets transactions in the last 90 days (3 months) ***
  .get(function(req, res) {
    var results = [];
    res.json(results);
  })

  // *** CLIENT->SERVER ALL FUNCTIONAL! posts new transaction, updates transactions
  .post(TransactionsController.create);

router.route('/categories')

  // GETS budget categories
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
