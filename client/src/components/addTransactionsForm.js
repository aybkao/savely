import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Header, Modal, Checkbox, Form} from 'semantic-ui-react';
import axios from 'axios';

const getDate = () => {
  var today = new Date();
  return today.toDateString();
};

class AddTransactionsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      vendor: '',
      amount: '',
      date: '',
      category_id: '',
      description: '',
      agree: true,
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }
  handleChange(event, {name, value}) {
    var field = this;
    console.log(field);
    field.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      vendor,
      amount,
      date,
      category_id,
      description
    } = this.state;
    axios.post('/transaction', {
      vendor: vendor,
      amount: amount,
      date: date,
      category_id: category_id,
      description: description
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const {vendor, amount, date, category_id, description} = this.state;
    return (
      <Modal size='small' trigger={<Button fluid>Add Transaction</Button>} closeIcon='close' className='addTransaction'>
        <Modal.Header>Add a Transaction</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Vendor</label>
            <Form.Input placeholder='Vendor' name='vendor' value={vendor} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Amount</label>
            <Form.Input placeholder='$0.00' name='amount' value={amount} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <Form.Input placeholder='2017-06-01' name='date' value={date} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Category_ID</label>
            <Form.Input placeholder='1' name='category_id' value={category_id} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Form.Input placeholder='ex. coffee and bagel' name='description' value={description} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddTransactionsForm;
