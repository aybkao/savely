import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard.js';
import Routed from './components/routed.js';
import {Link} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

const App = () => {
  return (
    <div>
    <h1 id="savely_logo">Savely</h1>
    <Dashboard />
    <p><Link to="/r" activeClassName="active">Go to Routed</Link></p>
    </div>
  )
};

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={App} />
    <Route path="/r" component={Routed} />
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
