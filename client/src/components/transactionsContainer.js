import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsList from './transactionsList.js';
import {Button} from 'semantic-ui-react';

const TransactionsContainer = () => {
  return (
    <div id="transactions_column" className="col-md-4">
      <h2>Transactions</h2>
      <TransactionsList />
      <Button fluid>Add Transaction</Button>
    </div>
  )
};

export default TransactionsContainer;
