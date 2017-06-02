import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Carousel extends React.Component {
  render() {
    return (
      <div id="carousel">
        <div className="cell">
          <ul className="dots">
            <li><Link to="/r" activeClassName="active">Overview</Link></li>
            <li><a href="#">Transactions</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Carousel;
