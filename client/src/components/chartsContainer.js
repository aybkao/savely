import React from 'react';
import ReactDOM from 'react-dom';
import SavingsChartContainer from './savingsChartContainer.js';

const ChartsContainer = () => {
  return (
    <div id="charts_column" className="col-md-4">
      <h2>Savings and Spending</h2>
      <SavingsChartContainer />
      <SavingsChartContainer />
    </div>
  )
};

export default ChartsContainer;
