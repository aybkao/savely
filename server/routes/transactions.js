'use strict';
const express = require('express');
const router = express.Router();
const TransactionsController = require('../controllers').Transactions;

router.route('/')
  .get(TransactionsController.getAll) // GETS ALL TRANSACTIONS
  .post(TransactionsController.create); // CREATES A NEW TRANSACTION

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
