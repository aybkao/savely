const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Budget.fetchAll()
    .then(budgets => {
      res.status(200).send(budgets);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};
