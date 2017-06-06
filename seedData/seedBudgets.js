const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

const budgets = [
  {
    category_id: 2,
    budget_limit: 300,
    date: '2017-05-01'
  },
  {
    category_id: 1,
    budget_limit: 900,
    date: '2017-05-01'
  },
  {
    category_id: 3,
    budget_limit: 400,
    date: '2017-05-01'
  },
  {
    category_id: 4,
    budget_limit: 500,
    date: '2017-05-01'
  },
  {
    category_id: 5,
    budget_limit: 2000,
    date: '2017-05-01'
  },
  {
    category_id: 6,
    budget_limit: 100,
    date: '2017-05-01'
  },
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
const query = client.query(populateTable('INSERT INTO budgets (category_id, budget_limit, date) VALUES ', budgets));
query.on('end', () => { client.end(); });