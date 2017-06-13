'use strict';
const express = require('express');
const router = express.Router();
const config = require('../../config/default.json');
config['knex'].connection = process.env.DATABASE_URL;
const knex = require('knex')(config['knex']);

const qryString = 'select id form categories where profile_id =';
const getCategoryIdByName = (req, res) => {
  const qry = "select id from categories where category = '" + req.query.category + "' and profile_id = " + req.user.id + ';';
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
  .get(getCategoryIdByName);

module.exports = router;