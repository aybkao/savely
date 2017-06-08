'use strict';
const express = require('express');
const router = express.Router();
const TransactionsController = require('../controllers').Transactions;
const config = require('../../config/default.json');
config['knex'].connection = process.env.DATABASE_URL;
const knex = require('knex')(config['knex']);

const qryString = 'select t.vendor, t.description, t.amount, c.category, t.date from transactions as t join categories as c on t.category_id = c.id';
const getTransactionsJoinCategory = (req, res) => {
  knex.raw(qryString)
  .then(function (result) {
    console.log(result);
    const transacs = result.rows;
    transacs.forEach((x) => {
      x.date = JSON.stringify(x.date).slice(1, 11); 
      x.date = x.date.split('-').join('/');
    });  
    res.status(201).send(transacs);
  })
  .catch(function(err) { 
    console.log(err);
    res.status(500).send(err);
  });
};

router.route('/')
  .get(getTransactionsJoinCategory) 
  //.get(TransactionsController.getAll)
  .post(TransactionsController.create); // CREATES A NEW TRANSACTION

router.route('/categories');
  // .get(function(req, res) {
  //   var results = []; // database query that gets all categories
  //   res.json(results);
  // })
  // updates a budget category
  // .post(function(req, res) {
  //   var newCategory = req.body.category;
  //   // database query that updates db;
  //   res.end();
  // });

module.exports = router;
