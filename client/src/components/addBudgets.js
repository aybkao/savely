import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Dropdown} from 'semantic-ui-react';
import axios from 'axios';

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
      budgets: [{category: '', limit: ''}],
      profile_id: -1
    }
    this.handleBudgetCategoryNameChange = this.handleBudgetCategoryNameChange.bind(this);
    this.handleBudgetCategoryLimitChange = this.handleBudgetCategoryLimitChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    var that = this;
  }
  componentDidMount() {
    const script = document.getElementById('bundleScript');
    const ejsProps = script.getAttribute('data-user');
    const userInfoObj = JSON.parse(ejsProps);
    console.log("******** USER INFO AT ADD BUDGET", userInfoObj)
    this.state.profile_id = userInfoObj.id;
  }
  handleAddBudgetCategory() {
    console.log("THIS IS STATE", this.state)
    this.setState({
      budgets: this.state.budgets.concat([{category: '', limit: ''}])
    });
  }
  handleBudgetCategoryNameChange = (idx) => (evt, {name, value}) => {
    evt.preventDefault();
    console.log('function', idx);
    const newBudgets = this.state.budgets.map((budget, sidx) => {
      if (idx !== sidx) return budget;
      return { ...budget, category: value };
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
    console.log("AFTER REMOVE", this.state)
  }
  handleSubmit() {
    const context = this;
    //for (var i = 0; i < context.state.budgets.length; i++) {
      
      axios.get('/category')
      .then((response) => {
        const existingCatArray = response.data;
        const catNames = existingCatArray.map((cat) => {return cat.category})
        const inputCatArray = context.state.budgets;
        console.log("get all categories by profileid", existingCatArray)
        for (var i = 0; i < inputCatArray.length; i++) {
          if (catNames.indexOf(inputCatArray.category) === -1) {
            axios.post('/category', {
              category: inputCatArray[i].category,
              budget_limit: inputCatArray[i].limit,
              profile_id: context.state.profile_id
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            })
          }
        }
      })

      .catch((error) => {
        console.log(error) 
      })

      // axios.post('/category')
      //  .then()
    //}
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
            <Dropdown placeholder={'Choose a Category'} name={'category'} search selection onChange={this.handleBudgetCategoryNameChange(idx)} options={categories} />
            <Form.Input placeholder={'0.00'} name={'limit'} value={budget.limit} onChange={this.handleBudgetCategoryLimitChange(idx)} />
            <Button type='button' onClick={function(){context.handleRemoveBudgetCategory(idx);}.bind(this)} >Remove Category</Button>
          </Form.Field>
        ))}
        <Button type='button' onClick={this.handleAddBudgetCategory.bind(this)}>Add Budget Category</Button>
        <Button type='button' onClick={this.handleSubmit}>Submit Budget Categories</Button>
      </div>
    )
  }
}

export default AddBudgets;
