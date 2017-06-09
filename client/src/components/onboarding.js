import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Dropdown} from 'semantic-ui-react';
import states from '../stores/states.js';
import federal from '../stores/federal.js';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.calculateStateIncomeTax('Nevada', 120000, 'married');
  }
  calculateFederalIncomeTax(income /*annual*/, status) {
    var incomeTax = 0;
    var taxableIncome = income;
    if (status === 'single') {
      var brackets = [];
      for (var bracket in federal.single_tax_brackets) {
        if (income > Number(bracket)) {
          brackets.push([Number(bracket), federal.single_tax_brackets[bracket]]);
        }
      }
    } else if (status === 'married') {
      var brackets = [];
      for (var bracket in federal.married_tax_brackets) {
        if (income > Number(bracket)) {
          brackets.push([Number(bracket), federal.married_tax_brackets[bracket]]);
        }
      };
    }
    brackets.sort(function(a,b) {
      return b[0] > a[0];
    });
    for (var i = 0; i < brackets.length; i++) {
      incomeTax += (taxableIncome - brackets[i][0])*brackets[i][1];
      taxableIncome = brackets[i][0];
    }
    console.log(incomeTax);
    return incomeTax;
  }
  calculateStateIncomeTax(state, income, status) {
    var stateInfo;
    var incomeTax = 0;
    var taxableIncome = income;

    for (var i = 0; i < states.length; i++) {
      if (states[i].text === state) {
        stateInfo = states[i];
        console.log(stateInfo);
        break;
      }
    }
    if (stateInfo.single_tax_brackets === undefined) {
      return 0
    }
    // if (status === 'single') {
    //   var brackets = [];
    //   for (var bracket in stateInfo.single_tax_brackets) {
    //     if (income > Number(bracket)) {
    //       brackets.push([Number(bracket), stateInfo.single_tax_brackets[bracket]]);
    //     }
    //   }
    // } else if (status === 'married') {
    //   var brackets = [];
    //   for (var bracket in stateInfo.married_tax_brackets) {
    //     if (income > Number(bracket)) {
    //       brackets.push([Number(bracket), stateInfo.married_tax_brackets[bracket]]);
    //     }
    //   };
    // }
    // brackets.sort(function(a,b) {
    //   return b[0] > a[0];
    // });
    // for (var i = 0; i < brackets.length; i++) {
    //   incomeTax += (taxableIncome - brackets[i][0])*brackets[i][1];
    //   taxableIncome = brackets[i][0];
    // }
    // console.log(incomeTax);
    // return incomeTax;
  }
  render() {
    return (
    <div id="onboarding_container">
      <div id="onboarding_header">
        <img id='logoSavely' src='/assets/logoGreen.png'></img>
      </div>
      <h1>Welcome to Savely</h1>
      <Form>
      <Form.Field>
        <label>Enter your income</label>
        <Form.Input placeholder='Income' name='income' />
        <Dropdown placeholder='per Year' fluid search selection options={[{text: 'per Year'}, {text: 'per Month'}, {text: 'per Week'}]} />
      </Form.Field>
      <Form.Field>
        <label>Do you own or rent your home?</label>
        <Dropdown placeholder='Select One' fluid search selection options={[{text: 'I Own My Home'}, {text: 'I Rent'}, {text: 'I Live with My Parents'}]} />
        <Form.Input placeholder='Payment' name='housing_payment' />
      </Form.Field>
      <Form.Field>
        <label>Are you single or married (or married and file taxes separately)?</label>
        <Dropdown placeholder='Select One' fluid search selection options={[{text: 'Single'}, {text: 'Married'}, {text: 'Married, File separately'}]} />
      </Form.Field>
      <Form.Field>
        <label>What state do you live in?</label>
        <Dropdown placeholder='Select a State' fluid search selection options={states} />
      </Form.Field>
      <Form.Field>
        <label>What city do you live in?</label>
        <Form.Input placeholder='Your City' name='city' />
      </Form.Field>
      <Form.Field>
        <label>Do you contribute to a retirement plan at work (such as a 401(k))</label>
        <Dropdown placeholder='Choose One' fluid search selection options={[{text: 'Yes'}, {text: 'No'}]} />
      </Form.Field>
      <h2>Now, let’s set some budget categories for you: </h2>
      <Form.Field>
        <label></label>
      </Form.Field>
      </Form>
    </div>
    )
  }
}

export default Onboarding;
