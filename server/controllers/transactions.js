const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Transactions.forge({
    vendor: 'Test',
    amount: 1,
    date: 'May 30 2017',
    category: 'Test',
    description: 'Test'
  })
    .save(null, {method: 'insert'})
    .then(function (user) {
      res.json({status: 'Success! WOO!'});
    })
    .catch(function (err) {
      res.status(500).json({status: 'Error! BOO'});
    });
};

// // module.exports.create = (req, res) => {
// //   models.Transactions.forge()
// //     .fetch()
// //     .then(result => {
// //       res.status(201).send('Test successful!');
// //     })
// //     .catch(err => {
// //       if (err) {
// //         return res.status(403);
// //       }
// //       res.status(500).send(err);
// //     });
// // };

// module.exports.create = (req, res) => {
//   models.Transactions.fetchAll()
//     .then(transactions => {
//       res.status(200).send(transactions);
//     })
//     .catch(err => {
//       // This code indicates an outside service (the database) did not respond in time
//       res.status(503).send(err);
//     });
// };


module.exports.getAll = (req, res) => {
  models.Transactions.fetchAll()
    .then(transactions => {
      res.status(200).send(transactions);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};
