const models = require('../../db/models');
const axios = require('axios');
const Promise = require('bluebird');

// var deleteTestEntriesIfTheyExist = () => {
//   models.Transaction.where({ vendor: 'Test' }).fetch()
//     .then(transaction => {
//       if (!transaction) {
//         throw transaction;
//       }
//       return transaction.destroy();
//     });
// };

module.exports.create = (req, res) => {
  
  var newEntry = {
    vendor: req.body.vendor,
    amount: req.body.amount,
    category_id: req.body.category,
    description: req.body.description,
    date: req.body.date
  };

  models.Transaction.forge(newEntry)
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
  deleteTestEntriesIfTheyExist();
};

module.exports.getAll = (req, res) => {
  models.Transaction.fetchAll()
    .then(transactions => {
      res.status(200).send(transactions);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};
