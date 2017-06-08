import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Dropdown} from 'semantic-ui-react';
import states from '../stores/states.js';
import federal from '../stores/federal.js';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.calculateFederalIncomeTax(120000, 'single');
  }
  calculateFederalIncomeTax(income /*annual*/, status) {
    //For each tax bracket
      //If user's income is higher than that bracket, add to list of tax brackets [starting point, bracket]
      //sort tuples in descending order
    //Once highest tax bracket is determined
      //Multiply the portion of income that exceeds that tax bracket by the prescribed rate
      //
    if (status === 'single') {
      var brackets = [];
      for (var bracket in federal.single_tax_brackets) {
        if (income > Number(bracket)) {
          brackets.push([Number(bracket), federal.single_tax_brackets[bracket]]);
        }
      };
    } else if (status === 'married') {
      console.log(federal.married_tax_brackets);
    }
    brackets.sort(function(a,b) {
      return b[0] > a[0];
    });
    for (var i = 0; i < brackets.length; i++) {
      console.log(brackets[i]);
    }
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
        <Dropdown placeholder='Select a State' fluid search selection options={states} />
      </Form.Field>
      <Form.Field>
      </Form.Field>
      </Form>
    </div>
    )
  }
}

export default Onboarding;
