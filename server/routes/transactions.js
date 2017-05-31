'use strict';
const express = require('express');
const router = express.Router();

router.route('/transactionsDisplayTen')
  // gets top 20 [previous] transactions upon load
  .get(function(req, res) {
    res.end();
  })
  // user submits transaction, updates transactions
  .post(function(req, res) {
    res.end();
  });

router.route('/transactionsDisplayAll')
  // gets all [previous] transactions upon load
  .get(function(req, res) {
    res.end();
  });


router.route('/transactionsCategories')
  // user sorts by category
  .get(function(req, res) {
    res.end();
  });

module.exports = router;
