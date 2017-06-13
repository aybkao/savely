import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard.js';
import Carousel from './components/carousel.js';
import SetBudgets from './components/setBudgets.js';
import TransactionsPage from './components/transactionsPage.js';
import Onboarding from './components/onboarding.js';
import {Link} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

const App = () => {
  return (
    <div>
    <div id="dashboard_header">
      <img id='logoSavely' src='/assets/logoGreen.png'></img>
    </div>
    <Carousel />
    <Dashboard />
    </div>
  );
};

const router = (
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path="/" component={App} />
      <Route path="/t" component={TransactionsPage} />
      <Route path="/o" component={Onboarding} />
      <Route path="/s" component={SetBudgets} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
