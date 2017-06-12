const models = require('../../db/models');
const axios = require('axios');
const Promise = require('bluebird');

module.exports.create = (req, res) => {
  var newEntry = {
    name: req.body.name,
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

module.exports.getAll = (req, res) => {
  models.Categories.fetchAll()
    .then(category => {
      res.status(200).send(category);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};
