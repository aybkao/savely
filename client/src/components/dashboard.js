import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsContainer from './transactionsContainer.js';
import Budgets from './budgets.js';
import CashFlowChart from './cashFlowChart.js';
import PieChartContainer from './pieChartContainer.js';
import SavingsChartContainer from './savingsChartContainer.js';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';

const Dashboard = () => {
  console.log();
  return (
    <div className='dashboard_container'>
      <div className="row">
        <CashFlowChart />
        <PieChartContainer />
      </div>
      <div className="row">
        <SavingsChartContainer />
        <SpendingCategoriesChartContainer />
      </div>
    </div>
  )
};

export default Dashboard;
