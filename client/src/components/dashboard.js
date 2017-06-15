import React from 'react';
import ReactDOM from 'react-dom';
import Budgets from './budgets.js';
import CashFlowChart from './cashFlowChart.js';
import PieChartContainer from './pieChartContainer.js';
import SavingsChartContainer from './savingsChartContainer.js';
import SpendingCategoriesChartContainer from './spendingCategoriesChartContainer.js';
import store from '../store.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getTransactions from '../actions/getTransactions.js';
import getBudgets from '../actions/getBudgets.js';
import axios from 'axios';

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
};


//var budgets = store.getState().budgets.budgets;
var parsePieChartData = function(transactions) {

  var recentTransactions = []; //Stores transactions for last 30 days
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  for (var currTrans = 0; currTrans < transactions.length; currTrans++) {
    var currTransDate = new Date(transactions[currTrans].date);
    var timeDiff = Math.abs(today.getTime() - currTransDate.getTime());
    var daysSince = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (daysSince <= 30) {
      recentTransactions.push(transactions[currTrans]);
    }
  }

  var categories = [];
  var pieChartData = [];

  for (var i = 0; i < recentTransactions.length; i++) {
    if (!categories.includes(recentTransactions[i].category)) {
      categories.push(recentTransactions[i].category);
    }
  }
  for (var j = 0; j < categories.length; j++) {
    var total = 0;
    for (var k = 0; k < recentTransactions.length; k++) {
      if (transactions[k].category === categories[j]) {
        total += recentTransactions[k].amount;
      }
    }
    var categoryTotal = {
      category: categories[j],
      spending: total
    };
    pieChartData.push(categoryTotal);
  }
  return pieChartData;
};
var parseSavingsChartData = function(income, transactions) {
  var today = new Date();
  var currentMonth = today.getMonth() + 1;
  var lastThreeMonths = [currentMonth-3, currentMonth-2, currentMonth-1];
  var lastThreeMonthsExpenses = [];
  var savingsChartData = [];
  var monthlyIncome = income / 12;

  for (var i = 0; i < lastThreeMonths.length; i++) {
    var monthTotalExpenses = 0;
    for (var j = 0; j < transactions.length; j++) {
      var currTransDate = new Date(transactions[j].date);
      var currTransMonth = currTransDate.getMonth() + 1;
      if (currTransMonth === lastThreeMonths[i]) {
        monthTotalExpenses += transactions[j].amount;
      }
    }
    lastThreeMonthsExpenses.push(monthTotalExpenses);
  }
  for (var k = 0; k < lastThreeMonths.length; k++) {
    var chartDataRow = {};
    chartDataRow.month = monthToString[lastThreeMonths[k]];
    chartDataRow.income = monthlyIncome;
    chartDataRow.expenses = lastThreeMonthsExpenses[k];
    savingsChartData.push(chartDataRow);
  }
  return savingsChartData;
};
var parseSpendingCategoriesChart = function(budgets, transactions) {
  var recentTransactions = []; //Stores transactions for last 30 days
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var spendingCategoriesChartData = [];

  for (var currTrans = 0; currTrans < transactions.length; currTrans++) {
    var currTransDate = new Date(transactions[currTrans].date);
    var timeDiff = Math.abs(today.getTime() - currTransDate.getTime());
    var daysSince = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (daysSince <= 30) {
      recentTransactions.push(transactions[currTrans]);
    }
  }

  for (var j = 0; j < budgets.length; j++) {
    var categoryRow = {};
    var categoryTotal = 0;
    for (var k = 0; k < recentTransactions.length; k++) {
      if (recentTransactions[k].category === budgets[j].category) {
        categoryTotal += recentTransactions[k].amount;
      }
    }
    categoryRow.category = budgets[j].category;
    categoryRow.limit = budgets[j].targetlimit;
    categoryRow.spent = categoryTotal;
    spendingCategoriesChartData.push(categoryRow);
  }

  return spendingCategoriesChartData;
};


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      income: 105000
    };
  }

  componentDidMount() {
    this.props.getTransactions();
    this.props.getBudgets();
    const that = this;
    const script = document.getElementById('bundleScript');
    const ejsProps = script.getAttribute('data-user');
    const userInfoObj = JSON.parse(ejsProps);
    const url = '/api/profiles/' + userInfoObj.id;
    axios.get(url)
    .then((res) => {
      that.setState({income: res.data.income});
    })
    .catch((error) => {
      throw error;
    });
  }

  render () {
    return (
      <div className='dashboard_container'>
        <div className="row">
          <CashFlowChart income={this.state.income} transactions={this.props.transactions} />
          <PieChartContainer data={parsePieChartData(this.props.transactions)} />
        </div>
        <div className="row">
          <SavingsChartContainer data={parseSavingsChartData(this.state.income, this.props.transactions)} />
          <SpendingCategoriesChartContainer data={parseSpendingCategoriesChart(this.props.budgets, this.props.transactions)}/>
        </div>
      </div>
    );
  }
}

//connects root reducer to props
const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.transactions,
    budgets: state.budgets.budgets
  };
};

//connects redux actions to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTransactions: getTransactions,
    getBudgets: getBudgets
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

