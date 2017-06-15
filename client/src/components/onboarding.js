import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Dropdown} from 'semantic-ui-react';
import states from '../stores/states.js';
import federal from '../stores/federal.js';
import AddBudgets from './addBudgets.js';

const getStates = function(states) {
  var newStates = [];
  for (var i = 0; i < states.length; i++) {
    var newState = Object.assign({}, states[i]);
    newStates.push(newState);
  }
  for (var j = 0; j < states.length; j++) {
    if (newStates[j].single_tax_brackets !== undefined) {
      newStates[j].key=j;
      delete newStates[j].single_tax_brackets;
      delete newStates[j].married_tax_brackets;
    }
  }
  return newStates;
};

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.newStates = getStates(states);
    this.state = {
      income: '',
      paycheck_frequency: '',
      housing_status: '',
      housing_payment: '',
      state: '',
      status: '',
      profile_id: -1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("mounted.....");
    const script = document.getElementById('bundleScript');
    const ejsProps = script.getAttribute('data-user');
    const userInfoObj = JSON.parse(ejsProps);
    this.state.profile_id = userInfoObj.id;
  }
  calculateFederalIncomeTax() {
    var incomeTax = 0;
    var taxableIncome = this.state.income;
    if (this.state.income === '' || this.state.status === '') {
      return 0;
    }
    if (this.state.status === 'single') {
      var brackets = [];
      for (var bracket in federal.single_tax_brackets) {
        if (this.state.income > Number(bracket)) {
          brackets.push([Number(bracket), federal.single_tax_brackets[bracket]]);
        }
      }
    } else if (this.state.status === 'married') {
      var brackets = [];
      for (var bracket in federal.married_tax_brackets) {
        if (this.state.income > Number(bracket)) {
          brackets.push([Number(bracket), federal.married_tax_brackets[bracket]]);
        }
      }
    }
    brackets.sort(function(a,b) {
      return b[0] > a[0];
    });
    for (var i = 0; i < brackets.length; i++) {
      incomeTax += (taxableIncome - brackets[i][0])*brackets[i][1];
      taxableIncome = brackets[i][0];
    }
    return (incomeTax / 12).toFixed(2);
  }
  calculateStateIncomeTax() {
    var stateInfo;
    var incomeTax = 0;
    var taxableIncome = this.state.income;
    console.log(this.state.income, this.state.status, this.state.state);
    if (this.state.income === '' || this.state.state === '' || this.state.status === '') {
      return 0;
    }
    for (var i = 0; i < states.length; i++) {
      if (states[i].text === this.state.state) {
        stateInfo = states[i];
        break;
      }
    }
    console.log(stateInfo);
    if (stateInfo.single_tax_brackets === undefined) {
      return 0;
    }
    if (this.state.status === 'single') {
      var brackets = [];
      for (var bracket in stateInfo.single_tax_brackets) {
        if (this.state.income > Number(bracket)) {
          brackets.push([Number(bracket), stateInfo.single_tax_brackets[bracket]]);
        }
      }
    } else if (this.state.status === 'married') {
      var brackets = [];
      for (var bracket in stateInfo.married_tax_brackets) {
        if (this.state.income > Number(bracket)) {
          brackets.push([Number(bracket), stateInfo.married_tax_brackets[bracket]]);
        }
      }
    }
    brackets.sort(function(a,b) {
      return b[0] > a[0];
    });
    for (var i = 0; i < brackets.length; i++) {
      incomeTax += (taxableIncome - brackets[i][0])*brackets[i][1];
      taxableIncome = brackets[i][0];
    }
    console.log(incomeTax);
    return (incomeTax / 12).toFixed(2);
  }
  getMonthlyIncome() {
    var user_income;
    if (this.state.paycheck_frequency === 'annual') {
      user_income = this.state.income;
    } else if (this.state.paycheck_frequency === 'monthly') {
      user_income = this.state.income * 12;
    } else if (this.state.paycheck_frequency === 'weekly') {
      user_income = this.state.income * 52;
    }
    return user_income / 12;
  }
  handleChange(event, {name, value}) {
    var field = this;
    field.setState({ [name]: value });
  }
  handleSubmit() {
    var that = this;
    var user_income;
    const {income, paycheck_frequency, housing_status, housing_payment, status, state, city, retirement_plan, budgets} = this.state;
    if (paycheck_frequency === 'annual') {
      user_income = income;
    } else if (paycheck_frequency === 'monthly') {
      user_income = income * 12;
    } else if (paycheck_frequency === 'weekly') {
      user_income = income * 52;
    }
    axios.get('/api/profiles/' + that.profile_id)
    .then((res) => {
      axios.put('/api/profiles/' + that.profile_id, {
        first: res.data.first,
        last: res.data.last,
        display: res.data.display, 
        email: res.data.email,
        phone: res.data.phone,
        income: Number(user_income),
        status: that.state.status        
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  }
  shouldComponentUpdate(newState) {
    return newState !== this.state;
  }
  render() {
    const context = this;
    const {income, paycheck_frequency, housing_status, housing_payment, status, state, city, retirement_plan} = this.state;
    return (
    <div id="onboarding_container">
      <div id="onboarding_header">
        <img id='logoSavely' src='/assets/logoGreen.png'></img>
      </div>
      <h1>Welcome to Savely</h1>
      <Form onSubmit={this.handleSubmit.bind(this)}>
      <Form.Field>
        <label>Enter your income</label>
        <Form.Input placeholder='Income' name='income' value={income} onChange={this.handleChange.bind(this)}/>
        <Dropdown placeholder='per Year' name='paycheck_frequency' search selection options={[{text: 'per Year', value: 'annual', key: 1}, {text: 'per Month', value: 'monthly', key: 2}, {text: 'per Week', value: 'weekly', key: 3}]} onChange={this.handleChange.bind(this)}/>
      </Form.Field>
      <Form.Field>
        <label>Do you own or rent your home?</label>
        <Dropdown placeholder='Select One' name='housing_status' value={housing_status} search selection options={[{text: 'I Own My Home', value: 'own', key: 1}, {text: 'I Rent', value: 'rent', key: 2}, {text: 'Other', value: 'other', key: 3}]} onChange={this.handleChange.bind(this)}/>
        <Form.Input placeholder='Payment' name='housing_payment' value={housing_payment} onChange={this.handleChange.bind(this)} />
      </Form.Field>
      <Form.Field>
        <label>Are you single or married (or married and file taxes separately)?</label>
        <Dropdown placeholder='Select One' name='status' search selection options={[{text: 'Single', value: 'single', key: 1}, {text: 'Married', value: 'married', key: 2}]} onChange={this.handleChange.bind(this)} />
      </Form.Field>
      <Form.Field>
        <label>What state do you live in?</label>
        <Dropdown placeholder='Select a State' name='state' value={state} search selection options={this.newStates} onChange={this.handleChange.bind(this)} />
      </Form.Field>
      <Form.Field>
        <label>What city do you live in? Many cities levy an income tax so you will need to take that into account when setting budgets.</label>
        <Form.Input placeholder='Your City' name='city' value={city} onChange={this.handleChange.bind(this)} />
      </Form.Field>
      <Form.Field>
        <label>Do you contribute to a retirement plan at work (such as a 401(k))</label>
        <Dropdown placeholder='Choose One' name='retirement_plan' value={retirement_plan} search selection options={[{text: 'Yes', value: true, key: 1}, {text: 'No', value: false, key: 2}]} onChange={this.handleChange.bind(this)} />
      </Form.Field>
      <h2>We estimate you have this much in monthly after tax income: {'$' + (this.getMonthlyIncome() - this.calculateFederalIncomeTax() - this.calculateStateIncomeTax()).toFixed(2)}</h2>
      <h2>Now, let’s set some budget categories for you: </h2>
      <Form.Field>
        <label>For most of our customers housing is their most expensive category. Housing generally shouldn't be more than 1/3 of your income, but in some high cost of living areas that may be difficult.</label>
        <label>Set your housing budget if you didn't enter your payment already: </label>
        <Form.Input placeholder='Payment' name='housing_payment' value={housing_payment} onChange={this.handleChange.bind(this)} />
      </Form.Field>
      <AddBudgets />
      <Button type='submit' onClick={this.handleSubmit}>Submit Income</Button>
      </Form>
    </div>
    );
  }
}

export default Onboarding;
