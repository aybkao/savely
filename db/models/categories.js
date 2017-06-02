const db = require('../');

const Category = db.Model.extend({
  tableName: 'category',
  profiles : function() {
    return this.hasMany('Profile');
  }
});

module.exports = db.model('Category', Category);
