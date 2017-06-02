const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

const cats = [
  {
    name: 'Food',
    profile_id: 1
  },
  {
    name: 'Rent',
    profile_id: 2
  }, 
  {
    name: 'Commute',
    profile_id: 2
  },
  {
    name: 'Insurance',
    profile_id: 3
  },
  {
    name: 'Food',
    profile_id: 3
  },
  {
    name: 'Entertainment',
    profile_id: 3
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


