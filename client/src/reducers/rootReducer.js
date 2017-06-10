import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import transactions from './transactions.js';
import budgets from './budgets.js';
import receipts from './receipts.js';

const rootReducer = combineReducers({
  transactions: transactions, 
  budgets: budgets,
  receipts: receipts, 
  routing: routerReducer
});

export default rootReducer;
