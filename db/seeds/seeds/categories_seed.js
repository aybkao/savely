const models = require('../../models');
const Promise = require('bluebird');
const knex = require('knex');

const cats = [
  {
    category: 'Restaurants',
    budget_limit: 900,
    profile_id: 1
  },
  {
    category: 'Groceries',
    budget_limit: 300,
    profile_id: 1
  },
  {
    category: 'Entertainment',
    budget_limit: 400,
    profile_id: 1
  },
  {
    category: 'Clothing',
    budget_limit: 500,
    profile_id: 1
  },
  {
    category: 'Housing',
    budget_limit: 2000,
    profile_id: 1
  },
  {
    category: 'Cosmetics',
    budget_limit: 100,
    profile_id: 1
  },
  {
    category: 'Restaurants',
    budget_limit: 900,
    profile_id: 2
  },
  {
    category: 'Groceries',
    budget_limit: 300,
    profile_id: 2
  },
  {
    category: 'Entertainment',
    budget_limit: 300,
    profile_id: 2
  },
  {
    category: 'Clothing',
    budget_limit: 500,
    profile_id: 2
  },
  {
    category: 'Housing',
    budget_limit: 2000,
    profile_id: 2
  }
];

module.exports = () => Promise.all(cats.map(cat => models.Category.forge(cat).save()));

