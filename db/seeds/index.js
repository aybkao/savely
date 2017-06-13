const admin = require('./seeds/users_seed.js');
const profiles = require('./seeds/profiles_seed.js'); 
const categories = require('./seeds/categories_seed.js'); 
const transactions = require('./seeds/transactions_seed.js');

exports.seed = (knex, Promise) => {
  return admin()
  .then(() => {
    return profiles();
  })
  .then(() => {
    return categories();
  })
  .then(() => {
    return transactions();
  });
};

