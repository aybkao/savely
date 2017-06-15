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
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      income: ''
    };
  }

  componentDidMount() {
    const that = this;
    const script = document.getElementById('bundleScript');
    const ejsProps = script.getAttribute('data-user');
    const userInfoObj = JSON.parse(ejsProps);
    const url = '/api/profiles/' + userInfoObj.id;
    axios.get(url)
    .then((response) => {
      if (response.data.income) {
        that.setState({
          income: response.data.income
        });
      }
    })
    .catch((error) => {
      throw error;
    });
  }

  renderRootComponent() {
    if (this.state.income === '') {
      return <Onboarding />;
    } else {
      return <Dashboard />;
    }
  }

  render() {
    return (
      <div>
      <div id="dashboard_header">
        <img id='logoSavely' src='/assets/logoGreen.png'></img>
      </div>
        <Carousel />
        {this.renderRootComponent()}
      </div>
    );
  }
}

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
