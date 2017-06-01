import React from 'react';
import ReactDOM from 'react-dom';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';

const Budgets = () => {
  return (
    <div id="budgets_column" className="col-lg-4">
      <h2>Spending Categories</h2>
      <span id="income"><em>Income: <p>$82436</p></em></span>
      <span id="expenses"><em>Expenses: <p>$63592</p></em></span>
      <SpendingCategoriesChartContainer />
    </div>
  )
};

export default Budgets;
