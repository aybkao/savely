'use strict';
const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers').Categories;
const config = require('../../config/default.json');
config['knex'].connection = process.env.DATABASE_URL;
const knex = require('knex')(config['knex']);

const getCategoryIdByName = (req, res) => {
  const qry = "select id, category from categories where category = '" + req.query.category + "' and profile_id = " + req.user.id + ';';
  knex.raw(qry)
  .then(function (result) {
    const matchId = result.rows[0].id;
    res.status(201).json(matchId);
  })
  .catch(function(err) { 
    console.log(err);
    res.sendStatus(500).send(err);
  });
};

router.route('/') 
  .get(CategoriesController.getAllByUser)
  .post(CategoriesController.create)

router.route('/:category') 
  .get(getCategoryIdByName)
  

module.exports = router;