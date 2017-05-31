import React from 'react';
import ReactDOM from 'react-dom';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';

const Budgets = () => {
  return (
    <div id="budgets_column" className="col-md-4">
      <h2>Spending Categories</h2>
      <SpendingCategoriesChartContainer />
    </div>
  )
};

export default Budgets;
