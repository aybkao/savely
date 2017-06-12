const models = require('../../models');

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

module.exports = () => Promise.all(Transactions.map(transac => models.Transaction.forge(transac).save()));

