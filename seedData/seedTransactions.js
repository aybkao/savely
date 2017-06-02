const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

// dummy data in table "transaction"
const transactions = [
  {
    vendor: 'Equator Coffee',
    amount: 4.75,
    date: '2017-05-30', 
    category_id: 1,
    description: 'coffee'
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 40.00,
    date: '2017-05-29',
    category_id: 1,
    description: 'uthapam and glass of wine'
  }, 
  {
    vendor: 'CREAM of San Francisco',
    amount: 3.50,
    date: '2017-05-29',
    category_id: 1,
    description: 'ice cream sandwhich'
  },
  {
    vendor: 'The Market on Market',
    amount: 6.75,
    date: '2017-05-29',
    category_id: 1,
    description: 'slize of pizza'
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 6.75,
    date: '2017-05-28',
    category_id: 1,
    description: 'ginger ante and mung dosa'
  },
  {
    vendor: 'rent',
    amount: 1500.00,
    date: '2017-05-25',
    category_id: 2,
    description: 'rent for apt'
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
const query = client.query(populateTable('INSERT INTO transactions (vendor, amount, date, category_id, description) VALUES ', transactions));
query.on('end', () => { client.end(); });

// query.on('end', () => { 
//   query1.on('end', () => {
//     query2.on('end', () => {
//       client.end(); 
//     });
//   });
// });




