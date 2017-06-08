import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Dropdown} from 'semantic-ui-react';
import states from '../stores/states.js'

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
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
        <Dropdown placeholder='Select a State' fluid search selection options={} />
      </Form.Field>
      <Form.Field>
      </Form.Field>
      </Form>
    </div>
    )
  }
}

export default Onboarding;
