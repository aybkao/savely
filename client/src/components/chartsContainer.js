import React from 'react';
import ReactDOM from 'react-dom';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';
import PieChartContainer from './pieChartContainer.js';

const ChartsContainer = () => {
  return (
    <div id="charts_column" className="col-lg-4">
      <h2>Savings and Spending</h2>
      <PieChartContainer />
      <SpendingCategoriesChartContainer />
    </div>
  )
};

export default ChartsContainer;
