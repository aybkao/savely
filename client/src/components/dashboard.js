import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsContainer from './transactionsContainer.js';
import Carousel from './carousel.js';
import Budgets from './budgets.js';
import ChartsContainer from './chartsContainer.js';

const Dashboard = () => {
  console.log();
  return (
    <div>
      <Budgets />
      <ChartsContainer />
      <Carousel />
    </div>
  )
};

export default Dashboard;
