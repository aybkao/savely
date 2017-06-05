const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

const cats = [
  {
    name: 'Restaurants',
    profile_id: 1
  },
  {
    name: 'Groceries',
    profile_id: 1
  }, 
  {
    name: 'Entertainment',
    profile_id: 1
  },
  {
    name: 'Clothing',
    profile_id: 1
  },
  {
    name: 'Housing',
    profile_id: 1
  },
  {
    name: 'Cosmetics',
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
const query = client.query(populateTable('INSERT INTO categories (name, profile_id) VALUES ', cats));
query.on('end', () => { client.end(); });


