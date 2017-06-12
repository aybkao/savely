import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Modal, Checkbox, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
const categoryOptions = [
  {text: 'Restaurants', value: 1}, 
  {text: 'Groceries', value: 2}, 
  {text: 'Entertainment', value: 3},
  {text: 'Clothing', value: 4}, 
  {text: 'Housing', value: 5}, 
  {text: 'Cosmetics', value: 6},
  {text: 'Mortgage', value: 'Mortgage'}, 
  {text: 'Insurance', value: 'Insurance'}, 
  {text: 'Travel', value: 'Travel'}, 
  {text: 'Commuting', value: 'Commuting'}, 
  {text: 'Car Payment', value: 'Car Payment'}, 
  {text: 'Public Transportation', value: 'Public Transportation'}
];

class AddTransactionsForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: '',
      amount: 0,
      date: '',
      category: '',
      description: ''
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }
  
  // componentDidUpdate() {
  //   console.log("PARSED RESULTS ***************", this.props.parsed)
  //   this.setState({
  //     vendor: this.props.parsed.vendor,
  //     amount: this.props.parsed.amount,
  //     date: this.props.parsed.date,
  //     category: this.props.parsed.category,
  //     description: this.props.parsed.description
  //   })
  // }
 
  handleChange(event, {name, value}) {
    var self = this;
    self.setState({[name]: event.target.value });
  }
  
  handleSubmit(event) {
    var obj = this.props.parsed;
    
    axios.post('/submission', {
      vendor: obj.vendor,
      amount: obj.amount,
      date: obj.date,
      category: obj.category,
      description: obj.description
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    
    return (
      <div>
      <Modal size='small' trigger={<Button fluid>Verify Transaction Results</Button>} closeIcon='close' className='addTransaction'>
        <Modal.Header>Add a Transaction</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Vendor</label>
            <Form.Input placeholder='Vendor' name='vendor' value={this.props.parsed.vendor} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Amount</label>
            <Form.Input placeholder='$0.00' name='amount' value={this.props.parsed.amount} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <Form.Input placeholder='2017-06-01' name='date' value={this.props.parsed.date} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <Dropdown placeholder='Select Category' name='category' search selection options={categoryOptions} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Form.Input placeholder='ex. coffee and bagel' name='description' value={this.props.parsed.description || null} onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <p>{}</p>
          <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
      </div>

    );
  }
}

export default AddTransactionsForm2;