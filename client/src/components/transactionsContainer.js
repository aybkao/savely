import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import TransactionsList from './transactionsList.js';
import AddTransactionsForm from './addTransactionsForm.js';
import { Button, Header, Image, Modal, Checkbox, Form} from 'semantic-ui-react';
import UploadReceipts from './uploadReceipts.js';
import store from '../store';
import { connect } from 'react-redux';
import getTransactions from '../actions/getTransactions.js';

const getDate = () => {
  var today = new Date();
  return today.toDateString();
};

//transactions={this.props.transactions}

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

//export default TransactionsContainer;
