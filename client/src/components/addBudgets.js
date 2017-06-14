import React from 'react';
import ReactDOM from 'react-dom';
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

class AddBudgets extends React.Component {
  constructor() {
    super();
    this.state = {
      budgets: [{category: '', limit: ''}]
    }
    this.handleBudgetCategoryNameChange = this.handleBudgetCategoryNameChange.bind(this);
    this.handleBudgetCategoryLimitChange = this.handleBudgetCategoryLimitChange.bind(this);
    var that = this;
  }
  handleAddBudgetCategory() {
    this.setState({
      budgets: this.state.budgets.concat([{category: '', limit: ''}])
    });
  }
  handleBudgetCategoryNameChange = (idx) => (evt) => {
    evt.preventDefault();
    console.log('function', idx);
    const newBudgets = this.state.budgets.map((budget, sidx) => {
      if (idx !== sidx) return budget;
      return { ...budget, category: evt.target.value };
    });
    this.setState({budgets: newBudgets});
  }
  handleBudgetCategoryLimitChange = (idx) => (evt) => {
    evt.preventDefault();
    console.log('function', idx);
    const newBudgets = this.state.budgets.map((budget, sidx) => {
      if (idx !== sidx) return budget;
      return { ...budget, limit: evt.target.value };
    });
    this.setState({budgets: newBudgets});
  }
  handleRemoveBudgetCategory(idx){
    this.setState({
      budgets: this.state.budgets.filter((s, sidx) => idx !== sidx)
    });
  }
  shouldComponentUpdate(newState) {
    console.log('shouldComponentUpdate');
    return newState.budgets !== this.state.budgets;
  }
  render() {
    const context = this;
    return (
      <div id='add_budgets'>
        {this.state.budgets.map((budget, idx) => (
          <Form.Field>
            <Dropdown placeholder={'Choose a Category'} name={'category'} value={budget.category} search selection onChange={this.handleBudgetCategoryNameChange(idx)} options={categories} />
            <Form.Input placeholder={'0.00'} name={'limit'} value={budget.limit} onChange={this.handleBudgetCategoryLimitChange(idx)} />
            <Button type='button' onClick={function(){context.handleRemoveBudgetCategory(idx);}.bind(this)} >Remove Category</Button>
          </Form.Field>
        ))}
        <Button type='button' onClick={this.handleAddBudgetCategory.bind(this)}>Add Budget Category</Button>
      </div>
    )
  }
}

export default AddBudgets;
