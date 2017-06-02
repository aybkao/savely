const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Transactions.forge({
    vendor: 'Test',
    amount: 1,
    date: 'May 30 2017',
    category: 'Test',
    description: 'Test'
  }, res.send('Test successful!'));
};
