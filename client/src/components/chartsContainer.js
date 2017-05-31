import React from 'react';
import ReactDOM from 'react-dom';
import SavingsChartContainer from './savingsChartContainer.js';
import PieChartContainer from './pieChartContainer.js';

const ChartsContainer = () => {
  return (
    <div id="charts_column" className="col-md-4">
      <h2>Savings and Spending</h2>
      <SavingsChartContainer />
      <PieChartContainer />
    </div>
  )
};

export default ChartsContainer;
