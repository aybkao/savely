import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Header, Modal, Checkbox, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
const categoryOptions = [
  {text: 'Restaurants', value: 'Restaurants'}, 
  {text: 'Groceries', value: 'Groceries'}, 
  {text: 'Entertainment', value: 'Entertainment'},
  {text: 'Clothing', value: 'Clothing'}, 
  {text: 'Housing', value: 'Housing'}, 
  {text: 'Cosmetics', value: 'Cosmetics'},
  {text: 'Mortgage', value: 'Mortgage'}, 
  {text: 'Insurance', value: 'Insurance'}, 
  {text: 'Travel', value: 'Travel'}, 
  {text: 'Commuting', value: 'Commuting'}, 
  {text: 'Car Payment', value: 'Car Payment'}, 
  {text: 'Public Transportation', value: 'Public Transportation'}
];
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
      category: '',
      description: '',
      agree: true,
      isDateValid: '',
      profile_id: -1
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const script = document.getElementById('bundleScript');
    const ejsProps = script.getAttribute('data-user');
    const userInfoObj = JSON.parse(ejsProps);
    this.state.profile_id = userInfoObj.id;
  }

  handleChange(event, {name, value}) {
    var field = this;
    console.log(field.state);
    field.setState({ [name]: value });
  }

  validateDate(date) {
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    var dateString = '2016-01-01';

    if(!regex_date.test(dateString)) {
      return false;
    }
    
    // Parse the date parts to integers
    var parts   = dateString.split("-");
    var day     = parseInt(parts[2], 10);
    var month   = parseInt(parts[1], 10);
    var year    = parseInt(parts[0], 10);
    if(year < 1000 || year > 3000 || month === 0 || month > 12) {
      return false;
    }
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }
    return day > 0 && day <= monthLength[month - 1];
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      vendor,
      amount,
      date,
      category,
      description,
      profile_id
    } = this.state;
    console.log(this.validateDate(this.state.date));
    const self = this;
    axios.get('/category/:category', {
      params: {
        category: self.state.category
      }
    })
    .then(function (response) {
      axios.post('/transaction', {
        vendor: vendor,
        amount: amount,
        date: date,
        category: response.data,
        description: description, 
        profile_id: profile_id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    })
    .catch(function(error) {
      console.log(error);
    }); 
  }

  render() {
    const {vendor, amount, date, category, description} = this.state;
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
            <label>Category</label>
            <Dropdown placeholder='Select Category' name='category' search selection options={categoryOptions} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Form.Input placeholder='ex. coffee and bagel' name='description' value={description} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <p>{}</p>
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
