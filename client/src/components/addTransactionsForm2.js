import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Modal, Checkbox, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import ReactSpinner from 'react-spinjs';
import store from '../store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getTransactions from '../actions/getTransactions.js';

class AddTransactionsForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: '',
      amount: 0,
      date: '',
      category: '',
      description: '',
      profile_id: -1,
      categoryOptions: null, 
      loading: false
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

  componentDidMount() {
    const script = document.getElementById('bundleScript');
    const ejsProps = script.getAttribute('data-user');
    const userInfoObj = JSON.parse(ejsProps);
    this.state.profile_id = userInfoObj.id;
    const self = this;
    axios.get('category')
    .then((response) => {
      let userCategories = [];
      response.data.map((cat) => {
        userCategories.push({text: cat.category, value: cat.category});
      });
      console.log("CAT OPTIONS", userCategories);
      self.setState({categoryOptions: userCategories});
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  }
 
  handleChange(event, {name, value}) {
    var field = this;
    console.log(field.state);
    field.setState({ [name]: value });
  }
  
  handleSubmit(event) {
    var obj = this.props.parsed;
    const self = this;
    axios.get('/category/:category', {
      params: {
        category: self.state.category
      }
    })
    .then(function (response) {
      axios.post('/transaction', {
        vendor: obj.vendor,
        amount: obj.amount,
        date: obj.date,
        category: response.data,
        description: obj.description,
        profile_id: self.state.profile_id
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
    event.preventDefault();
    this.setState({loading: true});
    setTimeout(() => {
      this.props.getTransactions();
      this.setState({loading: false});
    }, 2000);
  }

  render() {    
    return (
      <div>
      {this.state.loading ?  <div><ReactSpinner /></div> 
        : 
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
            <Dropdown placeholder='Select Category' name='category' search selection options={this.state.categoryOptions} onChange={this.handleChange.bind(this)}/>
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
      }
      </div>
    );
  }
}


//connects root reducer to props
const mapStateToProps = (state) => { return { transactions: state.transactions.transactions }; };

//connects redux actions to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTransactions: getTransactions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionsForm2);