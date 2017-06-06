import React from 'react';
import ReactDOM from 'react-dom';

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
    </div>
    )
  }
}

export default Onboarding;
