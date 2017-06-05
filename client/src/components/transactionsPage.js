import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Carousel from './carousel.js';
import TransactionsContainer from './transactionsContainer.js';

const TransactionsPage = () => {
  return (
    <div>
    <div id="dashboard_header">
      <img id='logoSavely' src='/assets/logoGreen.png'></img>
    </div>
    <TransactionsContainer />
    <Carousel />
    </div>
  );
};

export default TransactionsPage;
