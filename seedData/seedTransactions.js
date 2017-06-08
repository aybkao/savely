const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thesis';
const client = new pg.Client(connectionString);


// dummy data in table "transaction"
const transactions = [
  {
    vendor: 'Equator Coffee',
    amount: 11.11,
    date: '2017-05-30',
    category_id: 1,
    description: 'coffee',
    profile_id: 1
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 40.00,
    date: '2017-05-29',
    category_id: 1,
    description: 'uthapam and glass of wine',
    profile_id: 1
  }, 
  {
    vendor: 'CREAM of San Francisco',
    amount: 3.50,
    date: '2017-05-29',
    category_id: 1,
    description: 'ice cream sandwhich',
    profile_id: 1
  },
  {
    vendor: 'The Market on Market',
    amount: 6.75,
    date: '2017-05-29',
    category_id: 1,
    description: 'slize of pizza',
    profile_id: 1
  },
  {
    vendor: 'Dosa on Valencia',
    amount: 30.48,
    date: '2017-05-28',
    category_id: 1,
    description: 'ginger ante and mung dosa',
    profile_id: 1
  },
  {
    vendor: 'The Market on Market',
    amount: 86.18,
    date: '2017-05-28',
    category_id: 2,
    description: 'weekly groceries',
    profile_id: 1
  },
  {
    vendor: 'Chaat Corner',
    amount: 22.27,
    date: '2017-05-26',
    category_id: 1,
    description: 'Aloo Tiki and Chana Saag',
    profile_id: 1
  },
  {
    vendor: 'SFMOMA',
    amount: 33.00,
    date: '2017-05-21',
    category_id: 3,
    description: 'museum admission',
    profile_id: 1
  },
  {
    vendor: 'Cafe at SFMOMA',
    amount: 35.00,
    date: '2017-05-21',
    category_id: 1,
    description: 'museum admission',
    profile_id: 1
  },
  {
    vendor: 'Wetzels Pretzels',
    amount: 6.71,
    date: '2017-05-23',
    category_id: 1,
    description: 'pretzels',
    profile_id: 1
  },
  {
    vendor: 'The Market on Market',
    amount: 81.66,
    date: '2017-05-21',
    category_id: 2,
    description: 'weekly groceries',
    profile_id: 1
  },
  {
    vendor: 'Pasta Moto',
    amount: 10.41,
    date: '2017-05-20',
    category_id: 1,
    description: 'fusili arabiata',
    profile_id: 1
  },
  {
    vendor: 'Penhaglions',
    amount: 190.31,
    date: '2017-05-20',
    category_id: 4,
    description: 'cologne',
    profile_id: 1
  },
  {
    vendor: 'Panoramic',
    amount: 1995.00,
    date: '2017-06-01',
    category_id: 5,
    description: 'rent payment',
    profile_id: 1
  },
  {
    vendor: 'Vine Vera',
    amount: 283.75,
    date: '2017-05-07',
    category_id: 6,
    description: 'skincare products',
    profile_id: 1
  },
  {
    vendor: 'Vine Vera',
    amount: 761.25,
    date: '2017-05-07',
    category_id: 6,
    description: 'skincare products',
    profile_id: 1
  },
  {
    vendor: 'MealPal',
    amount: 76.83,
    date: '2017-05-30',
    category_id: 1,
    description: '20 lunches',
    profile_id: 1
  },
  {
    vendor: 'Slice House',
    amount: 6.75,
    date: '2017-04-30',
    category_id: 1,
    description: 'Sweet Grandma Pizza',
    profile_id: 1
  },
  {
    vendor: 'Panoramic',
    amount: 1995.00,
    date: '2017-05-01',
    category_id: 5,
    description: 'rent payment',
    profile_id: 1
  },
  {
    vendor: 'Panoramic',
    amount: 1995.00,
    date: '2017-04-01',
    category_id: 5,
    description: 'rent payment',
    profile_id: 1
  },
  {
    vendor: 'Panoramic',
    amount: 995.00,
    date: '2017-03-15',
    category_id: 5,
    description: 'rent payment',
    profile_id: 1
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
const query = client.query(populateTable('INSERT INTO transactions (vendor, amount, date, category_id, description, profile_id) VALUES ', transactions));
query.on('end', () => { client.end(); });

// query.on('end', () => { 
//   query1.on('end', () => {
//     query2.on('end', () => {
//       client.end(); 
//     });
//   });
// });




