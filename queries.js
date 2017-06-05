const env = require('dotenv/config');
console.log(env)

const knex = require('knex')(require('./knexfile'));
const Promise = require('bluebird');

// function getAllData (table) {  
//   knex(table).where({
//     category_id: 1
//   }).select('*')
//   .then((res) => {
//     console.log(res[0].vendor); 
//   })
// } 
// .finally(function() {
//   knex.destroy();
// });
// getAllData('transactions')


const knexSelectWhere = function (table, whereField, value) {
  var whereObj = {};
  whereObj[whereField] = value;
  console.log("WHERE OBJ", whereObj); 
  knex(table).where(whereField, value)
  .then((data) => {
    console.log(data); 
  })
  .finally(function() {
    knex.destroy();
  });  
};


const knexSelectAll = function (table) {
  knex(table).select('*')
  .then((data) => {
    console.log(data); 
  })
  .finally(function() {
    knex.destroy();
  });  
};

const knexInsert = function (table, keysArray, valuesArray) {
  // date has to be in strings with format 'YYYY-MM-DD'
  var insertObj = {};
  for (var i = 0; i < keysArray.length; i++) {
    insertObj[keysArray[i]] = valuesArray[i];
  }
  knex.insert(insertObj).into(table).then(function (data) {
    console.log("????????", data, " INSERTED!");
  })
  .finally(function() {
    knex.destroy();
  });  
};

// knexSelectWhere('transactions', 'vendor', '7-11');
// knexSelectAll('transactions');
// knexInsert('transactions', 
//   ['vendor', 'amount', 'date', 'category_id', 'description'], 
//   ['HagenDaz', 5.55, '2017-06-01', 1, 'ice cream'])

// knex.raw( "select * from transactions where vendor = '7-11';" )
// .then(function (data) {
//   console.log(data);
// });

module.exports.getTransactionCategory = function(res, req) {  
  knex('transactions').select(['transactions.vendor', 'transactions.description', 'transactions.amount', 'categories.name', 'transactions.date'])
  .innerJoin('categories', 'categories.id', 'transactions.category_id')
  .then(function (data) {
    console.log(data)
    res.send(data)
  })
  .finally(function() {
    knex.destroy();
  });
}

//getTransactionCategor



