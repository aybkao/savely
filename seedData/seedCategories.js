const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

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
  }
];


var populateTable = function (insert, rows) {
  const params = [];
  const segment = [];
  rows.forEach(row => {
    const valueClause = [];
    Object.keys(row).forEach(p => {
      params.push(row[p]);
      valueClause.push('$' + params.length);
    });
    segment.push('(' + valueClause.join(', ') + ')');
  });
  return {
    text: insert + segment.join(', '),
    values: params
  };
};


client.connect();
const query = client.query(populateTable('INSERT INTO categories (category, budget_limit, profile_id) VALUES ', cats));
query.on('end', () => { client.end(); });


