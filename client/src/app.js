import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard.js';
import Carousel from './components/carousel.js';
import Routed from './components/routed.js';
import {Link} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

const App = () => {
  return (
    <div>
    <div id="dashboard_header">
      <h1 id="savely_logo">Savely</h1>
    </div>
    <Dashboard />
    <Carousel />
    </div>
  )
};

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={App} />
    <Route path="/t" component={Routed} />
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
