const db = require('../');

const Budget = db.Model.extend({
  tableName: 'budgets',
  categories: () => {
    return this.hasMany('Category');
  }
});

module.exports = db.model('Budget', Budget);
