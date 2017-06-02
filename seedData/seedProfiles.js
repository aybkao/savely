const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

const profiles = [
  {
    first: 'A',
    last: 'K',
    display: 'AK',
    email: 'ak@ak.ak'
  },
  {
    first: 'J',
    last: 'H',
    display: 'JH',
    email: 'jh@jh.jh'
  },
  {
    first: 'test',
    last: 'test',
    display: 'testest',
    email: 'test@test.test'
  }
];


populateTable = function (insert, rows) {
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
const query = client.query(populateTable('INSERT INTO profiles (first, last, display, email) VALUES ', profiles));
query.on('end', () => { client.end(); });
  

