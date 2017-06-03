import React from 'react';
import ReactDOM from 'react-dom';
import Budgets from './budgets.js';
import CashFlowChart from './cashFlowChart.js';
import PieChartContainer from './pieChartContainer.js';
import SavingsChartContainer from './savingsChartContainer.js';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';
import store from '../store.js';
var transactions = store.getState().transactions.transactions;

var parsePieChartData = function(transactions) {
  //Get all possible categories from provided transactions
  //Filter data by each possible type of transaction
  //Get data into expected format '{category: "Restaurants", spending: 1331}'
  var categories = [];
  var pieChartData = [];
  debugger;
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
  console.log(categories);
  console.log(pieChartData);
  return pieChartData;
}

const Dashboard = () => {
  return (
    <div className='dashboard_container'>
      <div className="row">
        <CashFlowChart />
        <PieChartContainer data={parsePieChartData(transactions)}/>
      </div>
      <div className="row">
        <SavingsChartContainer />
        <SpendingCategoriesChartContainer />
      </div>
    </div>
  )
};

export default Dashboard;
