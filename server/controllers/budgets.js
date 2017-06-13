const models = require('../../db/models');

// module.exports.create = (req, res) => {
    //  for (var budget in req.body.budgets) {
    //   var newEntry = {
    //     category:
    //     budget_limit:
    //     profile_id: req.body.profile_id
    //   };
    //   //This request will likely need to be handled with a for loop
    //   models.Category.forge(newEntry)
    //     .save()
    //     .then(result => {
    //       res.status(201).send(result);
    //     })
    //     .catch(err => {
    //       if (err) {
    //         return res.status(403);
    //       }
    //       res.status(500).send(err);
    //     }); 
    //  }
//   // deleteTestEntriesIfTheyExist();
// };

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
