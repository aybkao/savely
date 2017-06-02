import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  render() {
    return (
      <div className="table" id="carousel">
        <div className="cell">
          <ul className="dots">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Transactions</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Carousel;
