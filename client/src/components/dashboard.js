import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsContainer from './transactionsContainer.js';
import Budgets from './budgets.js';
import ChartsContainer from './chartsContainer.js';

const Dashboard = () => {
  return (
    <div class="Grid">
      <Budgets />
      <ChartsContainer />
      <TransactionsContainer />
    </div>
  )
};

export default Dashboard;
