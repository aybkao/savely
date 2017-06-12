'use strict';
const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers').Categories;
const TransactionsController = require('../controllers').Transactions;
const config = require('../../config/default.json');
config['knex'].connection = process.env.DATABASE_URL;
const knex = require('knex')(config['knex']);

 
// const getAll = (req, res) => {}
// const mapCategoryToId = (req, res) => {
//   const transactionObj = {};
//   transactionObj.vendor = req.body.vendor;
//   transactionObj.amount = req.body.amount;
//   transactionObj.date = req.body.date;
//   transactionObj.category_id = req.body.category;
//   transactionObj.description = req.body.description;

//   knex.raw(getCategories)
//   .then(function(result) {
//     const cats = result.rows;
//     var index = cats.indexOf(req.body.category);
//     if (index > 1) {
//       res.status(201).send(index);
//     } else {
//       var insertQry = insertCategories + req.body.category + ',' + index + ');';
//       knex.raw(insertQry)
//       .then(function(response) {console.log(response)})
//       .catch(function(err) {res.status(500).send(err);})
//     }
//   })
//   .catch(function(err) {
//     res.status(500).send(err);
//   })
// }

router.route('/')
  .get(CategoriesController.getAll)
  .post(TransactionsController.create)
  //.post(mapCategoryToId)


module.exports = router;


