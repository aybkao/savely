import React from 'react';
import ReactDOM from 'react-dom';
import Budgets from './budgets.js';
import CashFlowChart from './cashFlowChart.js';
import PieChartContainer from './pieChartContainer.js';
import SavingsChartContainer from './savingsChartContainer.js';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';
import store from '../store.js';
var monthToString = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

var transactions = store.getState().transactions.transactions;
var budgets = store.getState().budgets.budgets;
var income = store.getState().budgets.income;
var parsePieChartData = function(transactions) {
  var categories = [];
  var pieChartData = [];

  for (var i = 0; i < transactions.length; i++) {
    if (!categories.includes(transactions[i].category)) {
      categories.push(transactions[i].category);
    }
  }
    for (var j = 0; j < categories.length; j++) {
      var total = 0;
      for (var k = 0; k < transactions.length; k++) {
        if (transactions[k].category === categories[j]) {
          total += transactions[k].amount;
        }
      }
      var categoryTotal = {
        category: categories[j],
        spending: total
      };
      pieChartData.push(categoryTotal);
    }
  return pieChartData;
}
var parseSavingsChartData = function(income, transactions) {
  var today = new Date();
  var currentMonth = today.getMonth() + 1;
  var lastThreeMonths = [currentMonth-1, currentMonth-2, currentMonth-1];
  var monthlyIncome = income / 12;
  for (var i = 0; i < transactions.length; i++) {

  }
};

const Dashboard = () => {
  return (
    <div className='dashboard_container'>
      <div className="row">
        <CashFlowChart income={income} transactions={transactions} />
        <PieChartContainer data={parsePieChartData(transactions)} />
      </div>
      <div className="row">
        <SavingsChartContainer data={parseSavingsChartData(income, transactions)} />
        <SpendingCategoriesChartContainer />
      </div>
    </div>
  )
};

export default Dashboard;
