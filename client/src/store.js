import {createStore, compse, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
//import {browserHistory} from 'react-router';
import rootReducer from './reducers/rootReducer.js'
//import transactions from './stores/transactions.js';
import budgets from './stores/budgets.js';
import thunk from 'redux-thunk';

const defaultState = {
  budgets
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  rootReducer, 
  defaultState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//export const history = syncHistoryWithStore(browserHistory, store);

export default store;
