const db = require('../');

const Budget = db.Model.extend({
  tableName: 'budgets'
});

module.exports = db.model('Budget', Budget);
