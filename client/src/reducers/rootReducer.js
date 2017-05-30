import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import transactions from './transactions.js';
// import budgets from './budgets.js';

const rootReducer = combineReducers({transactions, routing: routerReducer});

export default rootReducer;
