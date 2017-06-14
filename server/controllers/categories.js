const models = require('../../db/models');
const axios = require('axios');
const Promise = require('bluebird');

module.exports.create = (req, res) => {
  var newEntry = {
    category: req.body.category,
    budget_limit: req.body.budget_limit,
    profile_id: req.body.profile_id
  };

  models.Category.forge(newEntry)
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      if (err) {
        return res.status(403);
      }
      res.status(500).send(err);
    });
};


module.exports.getAllByUser = (req, res) => {
  models.Category.where({ profile_id: req.user.id }).fetchAll()
    .then(category => {
      if (!category) {
        throw category;
      }
      res.status(200).send(category);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.getAll = (req, res) => {
  models.Category.fetchAll()
    .then(category => {
      res.status(200).send(category);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};
