import React from 'react';
import ReactDOM from 'react-dom';
import SavingsChartContainer from './savingsChartContainer.js';
import CashFlowChart from './cashFlowChart.js';

const Budgets = () => {
  return (
    <div id="budgets_column" className="col-lg-6">
      <h2>Spending Categories</h2>
      <CashFlowChart />
      <SavingsChartContainer />
    </div>
  )
};

export default Budgets;
