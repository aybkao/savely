import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.js';
import {Form, Button, Dropdown} from 'semantic-ui-react';
const categories = [ { text: 'Cable', value: 'Cable', key: 1 },
  { text: 'Car Payment', value: 'Car Payment', key: 2 },
  { text: 'Clothing', value: 'Clothing', key: 3 },
  { text: 'Cosmetics', value: 'Cosmetics', key: 4 },
  { text: 'Electronics', value: 'Electronics', key: 5 },
  { text: 'Fees', value: 'Fees', key: 6 },
  { text: 'Gas', value: 'Gas', key: 7 },
  { text: 'Groceries', value: 'Groceries', key: 8 },
  { text: 'Healthcare', value: 'Healthcare', key: 9 },
  { text: 'Hobbies', value: 'Hobbies', key: 10 },
  { text: 'Home Improvement', value: 'Home Improvement', key: 11 },
  { text: 'Insurance', value: 'Insurance', key: 12 },
  { text: 'Internet', value: 'Internet', key: 13 },
  { text: 'Mortgage', value: 'Mortgage', key: 14 },
  { text: 'Office', value: 'Office', key: 15 },
  { text: 'Other', value: 'Other', key: 16 },
  { text: 'Rent', value: 'Rent', key: 17 },
  { text: 'Restaurants', value: 'Restaurants', key: 18 },
  { text: 'Student Loan', value: 'Student Loan', key: 19 },
  { text: 'Subscriptions', value: 'Subscriptions', key: 20 },
  { text: 'Travel', value: 'Travel', key: 21 },
  { text: 'Tuition', value: 'Tuition', key: 22 },
  { text: 'Utiliies', value: 'Utiliies', key: 23 } ];

class SetBudgets extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="set_budgets">
        <Carousel />
        <h1>Welcome to Set Budgets</h1>
      </div>
    )
  }
}

export default SetBudgets;
