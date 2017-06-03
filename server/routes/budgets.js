'use strict';
const express = require('express');
const router = express.Router();
const BudgetController = require('../controllers').Budgets;

router.route('/')
  .get(BudgetController.getAll)
  ;

module.exports = router;
