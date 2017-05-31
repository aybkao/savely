import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsContainer from './transactionsContainer.js';
import Budgets from './budgets.js';
import ChartsContainer from './chartsContainer.js';

const Dashboard = () => {
  console.log();
  return (
    <div>
      <Budgets />
      <ChartsContainer />
      <TransactionsContainer />
    </div>
  )
};

export default Dashboard;
