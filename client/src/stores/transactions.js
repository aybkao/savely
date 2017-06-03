import axios from 'axios';

const transactions = {
  transactions: [
   {
     transactionId: 1,
     vendor: 'Equator Coffee',
     amount: 4.75,
     date: '2017/05/30',
     category: 'Restaurants',
     description: 'coffee'
   },{
     transactionId: 2,
     vendor: 'Dosa on Valencia',
     amount: 40.00,
     date: '2017/05/29',
     category: 'Restaurants',
     description: 'uthapam and glass of wine'
   }, {
     transactionId: 3,
     vendor: 'CREAM of San Francisco',
     amount: 3.50,
     date: '2017/05/29',
     category: 'Restaurants',
     description: 'ice cream sandwhich'
   },
   {
     transactionId: 4,
     vendor: 'The Market on Market',
     amount: 6.75,
     date: '2017/05/29',
     category: 'Restaurants',
     description: 'slize of pizza'
   },
   {
     transactionId: 5,
     vendor: 'Dosa on Valencia',
     amount: 30.48,
     date: '2017/05/28',
     category: 'Restaurants',
     description: 'ginger ante and mung dosa'
   },
   {
     transactionId: 7,
     vendor: 'Walgreens',
     amount: 1.29,
     date: '2017/05/28',
     category: 'Drug Store',
     description: 'water'
   },
   {
     transactionId: 8,
     vendor: 'The Market on Market',
     amount: 86.18,
     date: '2017/05/28',
     category: 'Grocery Store',
     description: 'weekly groceries'
   },
   {
     transactionId: 9,
     vendor: 'Chaat Corner',
     amount: 22.27,
     date: '2017/05/26',
     category: 'Restaurants',
     description: 'Aloo Tiki and Chana Saag'
   },
   {
     transactionId: 10,
     vendor: 'SFMOMA',
     amount: 33.00,
     date: '2017/05/21',
     category: 'Entertainment',
     description: 'museum admission'
   },
   {
     transactionId: 11,
     vendor: 'Cafe at SFMOMA',
     amount: 35.00,
     date: '2017/05/21',
     category: 'Restaurants',
     description: 'museum admission'
   },
   {
     transactionId: 12,
     vendor: 'Wetzels Pretzels',
     amount: 6.71,
     date: '2017/05/23',
     category: 'Restaurants',
     description: 'pretzels'
   },
   {
     transactionId: 13,
     vendor: 'The Market on Market',
     amount: 81.66,
     date: '2017/05/21',
     category: 'Grocery Store',
     description: 'weekly groceries'
   },
   {
     transactionId: 14,
     vendor: 'Pasta Moto',
     amount: 10.41,
     date: '2017/05/20',
     category: 'Restaurants',
     description: 'fusili arabiata'
   },
   {
     transactionId: 15,
     vendor: 'Penhaglions',
     amount: 190.31,
     date: '2017/05/20',
     category: 'Clothing and Accessories',
     description: 'cologne'
   },
   {
     transactionId: 16,
     vendor: 'Panoramic',
     amount: 1995.00,
     date: '2017/06/01',
     category: 'Housing',
     description: 'rent payment'
   },
   {
     transactionId: 17,
     vendor: 'Vine Vera',
     amount: 283.75,
     date: '2017/05/07',
     category: 'Cosmetics',
     description: 'skincare products'
   },
   {
     transactionId: 18,
     vendor: 'Vine Vera',
     amount: 761.25,
     date: '2017/05/07',
     category: 'Cosmetics',
     description: 'skincare products'
   },
   {
     transactionId: 19,
     vendor: 'MealPal',
     amount: 76.83,
     date: '2017/05/30',
     category: 'Restaurants',
     description: '20 lunches'
   },
   {
     transactionId: 19,
     vendor: 'Slice House',
     amount: 6.75,
     date: '2017/04/30',
     category: 'Restaurants',
     description: 'Sweet Grandma Pizza'
   },
 ]};

export default transactions;
