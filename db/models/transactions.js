const db = require('../');

const Transaction = db.Model.extend({
  tableName: 'tansactions',
  categories: function() {
    return this.hasMany('Category');
  }
});

module.exports = db.model('Transaction', Transaction);
