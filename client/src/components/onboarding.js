import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Dropdown} from 'semantic-ui-react';

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
        <h2>Enter your income:</h2>
      </Form>
    </div>
    )
  }
}

export default Onboarding;
