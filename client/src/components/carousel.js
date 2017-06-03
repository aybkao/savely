import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Carousel extends React.Component {
  render() {
    return (
      <div id="carousel">
        <div className="cell">
          <ul className="dots">
            <li><Link to="/" activeClassName="active">Overview</Link></li>
            <li><Link to="/t" activeClassName="active">Transactions</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Carousel;
