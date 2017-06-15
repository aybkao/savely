import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
const links = [{to: "/", title: "Overview"},{to: "/t", title: "Transactions"}];

class Carousel extends React.Component {
  constructor() {
    super();
  }
  getDots(links){
    var dots = [];
    for (var i = 0; i < links.length; i++) {
      dots.push(
        <div key={i} className="active"><Link to={links[i].to}>{links[i].title}</Link></div>
      );
    }
    return dots;
  }
  render() {
    return (
      <div id="carousel">
        <div className="cell">
          <ul className="dots">
            {this.getDots(links)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Carousel;
