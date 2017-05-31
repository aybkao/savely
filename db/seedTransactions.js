const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);

// dummy data in table "transaction"
const transactions = [
  {
    vendor: 'Equator Coffee',
    amount: 4.75,
    date: '2017-05-30', 
    category: 'Restaurants',
    description: 'coffee'
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 40.00,
    date: '2017-05-29',
    category: 'Restaurants',
    description: 'uthapam and glass of wine'
  }, 
  {
    vendor: 'CREAM of San Francisco',
    amount: 3.50,
    date: '2017-05-29',
    category: 'Restaurants',
    description: 'ice cream sandwhich'
  },
  {
    vendor: 'The Market on Market',
    amount: 6.75,
    date: '2017-05-29',
    category: 'Restaurants',
    description: 'slize of pizza'
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 6.75,
    date: '2017-05-28',
    category: 'Restaurants',
    description: 'ginger ante and mung dosa'
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 6.75,
    date: '2017-05-28',
    category: 'Restaurants',
    description: 'ginger ante and mung dosa'
  },
  {
    vendor: 'Walgreens',
    amount: 1.29,
    date: '2017-05-28',
    category: 'Drug Store',
    description: 'water'
  },
  {
    vendor: 'The Market on Market',
    amount: 86.18,
    date: '2017-05-28',
    category: 'Grocery Store',
    description: 'weekly groceries'
  },
  {
    vendor: 'Chaat Corner',
    amount: 86.18,
    date: '2017-05-26',
    category: 'Restaurant',
    description: 'Aloo Tiki and Chana Saag'
  },
  {
    vendor: 'SFMOMA',
    amount: 33.00,
    date: '2017-05-21',
    category: 'Entertainment',
    description: 'museum admission'
  },
  {
    vendor: 'SFMOMA',
    amount: 33.00,
    date: '2017-05-21',
    category: 'Entertainment',
    description: 'museum admission'
  },
  {
    vendor: 'Wetzels Pretzels',
    amount: 6.71,
    date: '2017-05-23',
    category: 'Restaurants',
    description: 'pretzels'
  },
  {
    vendor: 'The Market on Market',
    amount: 81.66,
    date: '2017-05-21',
    category: 'Grocery Store',
    description: 'weekly groceries'
  },
  {
    vendor: 'Pasta Moto',
    amount: 10.41,
    date: '2017-05-20',
    category: 'Restaurant',
    description: 'fusili arabiata'
  },
  {
    vendor: 'Penhaglions',
    amount: 190.31,
    date: '2017-05-20',
    category: 'Clothing and Accessories',
    description: 'cologne'
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
const query = client.query('DROP TABLE IF EXISTS transactions;');
const query1 = client.query('CREATE TABLE transactions (id SERIAL PRIMARY KEY, vendor VARCHAR(128), amount NUMERIC(5, 2) not null, date DATE, category VARCHAR(128), description VARCHAR(128))');
const query2 = client.query(populateTable('INSERT INTO transactions (vendor, amount, date, category, description) VALUES ', transactions));
query.on('end', () => { 
  query1.on('end', () => {
    query2.on('end', () => {
      client.end(); 
    });
  });
});




