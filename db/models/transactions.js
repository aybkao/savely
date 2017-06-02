const db = require('../');

const Transaction = db.Model.extend({
  tableName: 'transactions'
});

module.exports = db.model('Transaction', Transaction);
