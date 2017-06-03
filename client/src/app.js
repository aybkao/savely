import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard.js';
import Carousel from './components/carousel.js';
import TransactionsPage from './components/transactionsPage.js';
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
    <Dashboard />
    <Carousel />
    </div>
  );
};

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={App} />
    <Route path="/t" component={TransactionsPage} />
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
