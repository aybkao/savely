import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsList from './transactionsList.js';
import {Button} from 'semantic-ui-react';
import store from '../store';
import { connect } from 'react-redux';

//transactions={this.props.transactions}

const TransactionsContainer = () => {
  return (
    <div id="transactions_column" className="col-md-4">
      <h2>Transactions</h2>
      <TransactionsList transactions={store.getState().transactions.transactions}/>
      <Button fluid>Add Transaction</Button>
    </div>
  )
};

export default TransactionsContainer;
