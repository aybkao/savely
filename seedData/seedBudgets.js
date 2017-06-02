const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

const budgets = [
  {
    category_id: 1,
    budget_limit: 100.50,
    date: '2017-05-01'
  },
  {
    category_id: 2,
    budget_limit: 33.33,
    date: '2017-05-20'
  },
  {
    category_id: 3,
    budget_limit: 2500.00,
    date: '2017-05-30'
  },
  {
    category_id: 2,
    budget_limit: 52.52,
    date: '2017-05-31'
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
const query = client.query(populateTable('INSERT INTO budgets (category_id, budget_limit, date) VALUES ', budgets));
query.on('end', () => { client.end(); });