import React from 'react';
import ReactDOM from 'react-dom';


class KeyInTransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 3};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {} 

  handleSubmit() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default KeyInTransactionForm;
