import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsList from './transactionsList.js';
import AddTransactionsForm from './addTransactionsForm.js';
import UploadReceipts from './uploadReceipts.js';
import store from '../store';
import { Button, Header, Image, Modal, Checkbox, Form} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getTransactions from '../actions/getTransactions.js';

const getDate = () => {
  var today = new Date();
  return today.toDateString();
};

class TransactionsContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTransactions();
  }
  
  render () {
    return ( 
      <div id="transactions_column">
        <h2>Transactions</h2>
        <TransactionsList transactions={this.props.transactions}/>
        <AddTransactionsForm />
        <UploadReceipts />
      </div>
    ); 
  }
}


//connects root reducer to props
const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.transactions
  };
};

//connects redux actions to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTransactions: getTransactions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);

