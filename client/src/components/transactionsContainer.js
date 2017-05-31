import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsList from './transactionsList.js';
import AddTransactionsForm from './addTransactionsForm.js'
// import { Button, Header, Image, Modal, Checkbox, Form} from 'semantic-ui-react';
import UploadReceipts from './uploadReceipts.js';
import store from '../store';
import { connect } from 'react-redux';

const getDate = () => {
  var today = new Date();
  return today.toDateString();
}

//transactions={this.props.transactions}

const TransactionsContainer = () => {
  return (
    <div id="transactions_column" className="col-md-4">
      <h2>Transactions</h2>
      <TransactionsList transactions={store.getState().transactions.transactions}/>
      <AddTransactionsForm />      
      <UploadReceipts />
    </div>
  );
};

export default TransactionsContainer;
